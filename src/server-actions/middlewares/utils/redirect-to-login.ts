import type { NextRequest } from 'next/server'

import { PAGE } from '@/config/page.config'

import { nextRedirect } from './next-redirect'

export const redirectTologin = (request: NextRequest) => {
	return nextRedirect(PAGE.AUTH, request.url)
}
