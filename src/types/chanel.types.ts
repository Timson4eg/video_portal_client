import type { IVideo } from './video.types'

export interface IChanel {
	id: string
	name: string
	slug: string
	description: string
	isVerified: boolean
	avatarUrl: string
	bannerUrl: string
	videos: IVideo
	subscribers: []
	createdAt: string
	// updatedAt: string
}
