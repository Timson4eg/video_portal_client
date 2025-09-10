import { LogIn } from 'lucide-react'

import { LinkButton } from '@/components/buttons/LinkButton'

import { PAGE } from '@/config/page.config'

import { HeaderAvatar } from './HeaderAvatar'
import { useTypedSelector } from '@/store'

export function HeaderProfile() {
	const { isLoggedIn } = useTypedSelector(state => state.auth)

	return isLoggedIn ? (
		<HeaderAvatar />
	) : (
		<LinkButton href={PAGE.AUTH}>
			<LogIn
				size={20}
				className='mr-2'
			/>
			Auth
		</LinkButton>
	)
}
