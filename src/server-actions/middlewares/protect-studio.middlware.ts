import { type NextRequest, NextResponse } from 'next/server'

import { getTokensFromRequest } from './utils/get-tokens-from-request'
import { jwtVerifyServer } from './utils/jwt-verify'
import { redirectTologin } from './utils/redirect-to-login'

export async function protectStudio(request: NextRequest) {
	const tokens = await getTokensFromRequest(request)
	if (!tokens) return redirectTologin(request)

	const verifiedData = await jwtVerifyServer(tokens.accessToken)
	if (!verifiedData) return redirectTologin(request)

	return NextResponse.next()
}
