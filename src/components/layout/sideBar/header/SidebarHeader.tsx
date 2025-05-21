import { COLORS } from '@constants/color.constants'
import { Menu, SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { PAGE } from '@/config/page.config'

export function SidebarHeader({ toogleSidebar }: { toogleSidebar: () => void }) {
	return (
		<div className='flex items-center gap-6 mb-12'>
			<button
				className='opacity-85 hover:opacity-100 transition-opacity'
				onClick={toogleSidebar}
			>
				<Menu />
			</button>
			<Link
				href={PAGE.HOME}
				className='flex items-center gap-5'
			>
				<SquarePlay
					color={COLORS.primary}
					size={30}
				/>
				<span className='font-medium text-xl'>RED Video</span>
			</Link>
		</div>
	)
}
