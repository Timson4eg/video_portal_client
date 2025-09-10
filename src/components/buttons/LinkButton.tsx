import Link, { type LinkProps } from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Tlink = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>

interface Props extends Tlink {
	isLoading?: boolean
	children: ReactNode
}

export function LinkButton({ children, isLoading, ...props }: Props) {
	return (
		<Link
			className='py-2 px-4 bg-primary text-white font-semibold rounded hover:bg-red-400 transiton-colors disabled:bg-gray-400 flex items-center gap-2'
			disabled={isLoading || props.disabled}
			{...props}
		>
			{isLoading ? 'isLoading...' : children}
		</Link>
	)
}
