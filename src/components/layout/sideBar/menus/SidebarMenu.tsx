import type { ISidebarItem } from '../sidebar.types'
import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import { MenuItem } from './MenuItem'

interface Props {
	title?: string
	menu: ISidebarItem[]
	isShowedSidebar: boolean
}

export function SidebarMenu({ title, menu, isShowedSidebar }: Props) {
	const pathName = usePathname()

	return (
		<nav>
			{title && <div className='opacity-45 uppercase text-xs mb-3 font-medium'>{title}</div>}
			<ul>
				{menu.map(menuItem => (
					<MenuItem
						key={menuItem.label}
						item={menuItem}
						isActive={!!match(menuItem.link)(pathName)}
						isShowedSidebar={isShowedSidebar}
					/>
				))}
			</ul>
		</nav>
	)
}
