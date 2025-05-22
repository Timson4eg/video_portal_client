import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	Icon?: LucideIcon
}

export function Heading({ children, Icon }: Props) {
	return (
		<div className='flex items-center gap-1  mb-4 opacity-90'>
			{Icon && <Icon className='text-primary' />}
			<h2>{children}</h2>
		</div>
	)
}
