import type { IChanel } from './chanel.types'

export interface IVideo {
	id: string
	title: string
	slug: string
	description: string

	thumbnailUrl: string
	videoFileName: string
	// maxResolution String @default("1080p") @map("max_resolution")

	viewsCount: number
	isPublic: boolean
	channel: IChanel
	createdAt: string
	// updatedAt: string
}
