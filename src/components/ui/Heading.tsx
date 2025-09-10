/**
 * Heading component
 *
 * @param {React.ReactNode} children - The heading text or any React node inside the component
 * @param {LucideIcon} [Icon] - Optional icon displayed on the left side of the heading
 * @param {boolean} [isH1=false] - If true, renders an <h1>; otherwise, renders an <h2>
 */
import cn from 'clsx'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	Icon?: LucideIcon
	isH1?: boolean
	isPageHeading?: boolean
}

export function Heading({ children, Icon, isH1 = false, isPageHeading = false }: Props) {
	return (
		<div
			className={cn(
				'flex items-center opacity-90',
				isPageHeading ? 'gap-2.5 mb-6' : 'gap-1.5 mb-4'
			)}
		>
			{Icon && <Icon className='text-primary' />}
			{isH1 ? (
				<h1 className='font-semibold text-lg'>{children}</h1>
			) : (
				<h2 className='font-semibold text-lg'>{children}</h2>
			)}
		</div>
	)
}
