import { Bell, LayoutGrid, PlusSquare } from 'lucide-react'
import Link from 'next/link'

import { STUDIO_PAGE } from '@/config/studio-page'

interface Props {}

export function HeaderLinks({}: Props) {
	return (
		<div className='flex items-center gap-4'>
			<Link
				className='transition-opacity hover:opacity-100 opacity-50'
				href={STUDIO_PAGE.UPLOAD_VIDEO}
			>
				<PlusSquare size={20} />
			</Link>
			<Link
				className='transition-opacity hover:opacity-100 opacity-50'
				href={STUDIO_PAGE.HOME}
			>
				<LayoutGrid size={20} />
			</Link>
			<Link
				className='transition-opacity hover:opacity-100 opacity-50'
				href={STUDIO_PAGE.HOME}
			>
				<Bell size={20} />
			</Link>
		</div>
	)
}
