import type { IChanel } from '@/types/chanel.types'
import type { IFullUser } from '@/types/user.types'

export interface ISettingsData extends Pick<IFullUser, 'name' | 'email' | > {
    pasword?: string
	channel?: Pick<IChanel, 'avatarUrl' | 'bannerUrl' | 'description' | 'slug'>
}
