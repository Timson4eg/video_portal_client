import dynamic from 'next/dynamic'

import { SidebarHeader } from './header/SidebarHeader'
import { SidebarMenu } from './menus/SidebarMenu'
import { SidebarSubscriptons } from './menus/subscriptions/SidebarSubscriptons'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './sidebar.data'

const DynamicLogOutBtn = dynamic(() => import('./LogOutBtn').then(mod => mod.LogOutBtn), {
	ssr: false
})

interface ISideBarProps {
	toogleSidebar: () => void
	isShowedSidebar: boolean
}

export function SideBar({ toogleSidebar, isShowedSidebar }: ISideBarProps) {
	return (
		<aside className='p-layout border-r border-border whitespace-nowrap overflow-hidden'>
			<SidebarHeader toogleSidebar={toogleSidebar} />
			<SidebarMenu
				menu={SIDEBAR_DATA}
				isShowedSidebar={isShowedSidebar}
			/>

			<SidebarSubscriptons />
			<SidebarMenu
				title='More from youtube'
				menu={MORE_SIDEBAR_DATA}
				isShowedSidebar={isShowedSidebar}
			/>
			<DynamicLogOutBtn />
		</aside>
	)
}
