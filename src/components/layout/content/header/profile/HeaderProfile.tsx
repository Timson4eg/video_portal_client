import Image from 'next/image'
import Link from 'next/link'

import { STUDIO_PAGE } from '@/config/studio-page'

interface Props {}

export function HeaderProfile({}: Props) {
	return (
		<Link
			href={STUDIO_PAGE.SETTINGS}
			className='shrink-0'
		>
			<Image
				src='/image.png'
				alt=''
				width={40}
				height={40}
				className=' rounded-lg'
			></Image>
		</Link>
	)
}
