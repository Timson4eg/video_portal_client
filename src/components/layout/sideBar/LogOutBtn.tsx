import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

import { PAGE } from '@/config/page.config'
import { STUDIO_PAGE } from '@/config/studio-page'

import { authService } from '@/services/auth.service'
import { useTypedSelector } from '@/store'

export function LogOutBtn() {
	const router = useRouter()
	const pathName = usePathname()

	const { mutate, isPending } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			if (pathName.includes(STUDIO_PAGE.HOME) || pathName.includes(STUDIO_PAGE.SETTINGS)) {
				router.push(PAGE.HOME)
			}
		}
	})

	const { isLoggedIn } = useTypedSelector(state => state.auth)

	if (!isLoggedIn) return null

	return (
		<button
			onClick={() => mutate()}
			className={'group flex items-center gap-5 py-2'}
		>
			<LogOut className='group-hover:text-primary transition group-hover:-rotate-6' />
			<span>{isPending ? 'Please wait...' : 'Logout'}</span>
		</button>
	)
}
