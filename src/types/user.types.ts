import type { IChanel } from './chanel.types'
import type { IWatchHistory } from './history.types'

export interface IUser {
	id: number
	name?: string
	email: string
}

export interface IFullUser extends IUser {
	channel: IChanel
	subscriptions: IChanel[]
	watchHistory: IWatchHistory
	verificationToken?: string | null
}
