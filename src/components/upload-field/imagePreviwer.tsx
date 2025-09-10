import { SkeletonLoaader } from '../ui/SkeletonLoaader'
import Image from 'next/image'

interface Props {
	isLoading: boolean
	value?: string
	overlay?: string
	aspectRation?: string
}

export function ImagePreview({ isLoading, overlay, value, aspectRation }: Props) {
	const isWidescreenRation = aspectRation === '16:9'
	const width = isWidescreenRation ? 446 : 100
	const height = isWidescreenRation ? 250 : 100
	console.log(isLoading)
	return (
		<div className='mt-3'>
			{isLoading ? (
				<SkeletonLoaader style={{ width, height }} />
			) : (
				!!value && (
					<div className='relative'>
						{!!overlay && (
							<Image
								alt='Overlay'
								className='rounded-md absolute top-0 left-0 h-full'
								src={overlay}
								width={width}
								height={height}
								priority
							/>
						)}
						<Image
							alt='Uploaded file'
							className='rounded-md'
							src={value}
							width={width}
							height={height}
							priority
						/>
					</div>
				)
			)}
		</div>
	)
}
