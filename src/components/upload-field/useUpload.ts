import { useMutation } from '@tanstack/react-query'
import { type ChangeEvent, useCallback } from 'react'
import toast from 'react-hot-toast'

import { fileService } from '@/services/file.service'

type TUseUpload = (props: { onChange: (...event: any[]) => void; folder?: string }) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => void
	isLoading: boolean
}

export const useUpload: TUseUpload = ({ onChange, folder }) => {
	const { mutate, isPending } = useMutation({
		mutationKey: ['upload file'],
		mutationFn: (data: FormData) => fileService.upload(data, folder),
		onSuccess: ({ data }) => {
			onChange(data[0].url)
		},
		onError: error => {
			toast.error(error.message)
		}
	})

	const uploadFile = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const file = e.target.files
			if (!file?.length) return

			const formData = new FormData()

			formData.append('file', file[0])
			mutate(formData)
		},
		[mutate]
	)

	return {
		uploadFile,
		isLoading: isPending
	}
}
