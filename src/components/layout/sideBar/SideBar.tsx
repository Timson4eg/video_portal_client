import { SidebarHeader } from './header/SidebarHeader'
import { SidebarMenu } from './menus/SidebarMenu'
import { SidebarSubscriptons } from './menus/subscriptions/SidebarSubscriptons'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './sidebar.data'

export function SideBar({ toogleSidebar }: { toogleSidebar: () => void }) {
	return (
		<aside className='p-layout border-r border-border whitespace-nowrap overflow-hidden'>
			<SidebarHeader toogleSidebar={toogleSidebar} />
			<SidebarMenu menu={SIDEBAR_DATA} />

			<SidebarSubscriptons />
			<SidebarMenu
				title='More from youtube'
				menu={MORE_SIDEBAR_DATA}
			/>
		</aside>
	)
}
