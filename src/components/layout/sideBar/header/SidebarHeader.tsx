import { Menu } from 'lucide-react'

import { Logo } from './Logo'

export function SidebarHeader({ toogleSidebar }: { toogleSidebar: () => void }) {
	return (
		<div className='flex items-center gap-6 mb-12'>
			<button
				className='opacity-85 hover:opacity-100 transition-opacity'
				onClick={toogleSidebar}
			>
				<Menu />
			</button>
			<Logo />
		</div>
	)
}
