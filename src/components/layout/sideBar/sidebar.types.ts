import type { LucideIcon } from 'lucide-react'

export interface ISidebarItem {
	icon: LucideIcon
	label: string
	link: string
	isBottomBorder?: boolean
}

export interface ISidebarSubItem {
	avatar: string
	icon: LucideIcon
	label: string
	link: string
	isBottomBorder?: boolean
	isLiveNow?: boolean
	isRecentUpload?: boolean
}
