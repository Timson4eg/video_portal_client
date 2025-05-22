'use client'

import cn from 'clsx'
import { type PropsWithChildren, useState } from 'react'

import { Content } from './content/Content'
import { SideBar } from './sideBar/SideBar'

import styles from './Layout.module.scss'

export function Layout({ children }: PropsWithChildren<unknown>) {
	const [isShowedSidebar, setIsShowedSideBar] = useState(true)

	const toogleSidebar = () => {
		setIsShowedSideBar(!isShowedSidebar)
	}

	return (
		<main
			className={cn(
				'flex min-h-screen',
				styles.initialSidebar,
				isShowedSidebar ? styles.showedSidebar : styles.hidedSidebar
			)}
		>
			<SideBar toogleSidebar={toogleSidebar} />
			<Content>{children}</Content>
		</main>
	)
}
