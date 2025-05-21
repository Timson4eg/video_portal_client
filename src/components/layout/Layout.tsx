'use client'

import cn from 'clsx'
import { type PropsWithChildren, useState } from 'react'

import { Content } from './content/Content'
import { SideBar } from './sideBar/SideBar'

import styles from './Layout.module.scss'

export function Layout({ children }: PropsWithChildren<unknown>) {
	const [isShowedSidebar, setIsShowedSideBar] = useState(true)
	const toogleSidebar = () => {
		console.log(styles.hidedSideBar)
		setIsShowedSideBar(!isShowedSidebar)
	}

	return (
		<main
			className={cn(
				'flex min-h-screen',
				isShowedSidebar ? styles.showedSidebar : styles.hidedSidebar
			)}
		>
			<SideBar toogleSidebar={toogleSidebar} />
			<Content>
				<section>{children}</section>
			</Content>
		</main>
	)
}
