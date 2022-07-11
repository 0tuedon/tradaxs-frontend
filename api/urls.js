export const BASE = process.env.NEXT_PUBLIC_BASE_URL

//  Authentication Url
export const LOGIN = `${BASE}/auth/login`
export const SIGNUP = `${BASE}/auth/register`
export const FORGOT_PASSWORD = `${BASE}/forgot-password`

// Profile check
export const USER_DETAILS = `${BASE}/usersDetails`

// wallets urls
export const CREATE_WALLET = `${BASE}/create_wallet`
export const GET_USER_WALLETS = `${BASE}/userWallets`
export const GET_ALL_ASSETS = `${BASE}/allAssets`
export const SEND_TRANSACTION= `${BASE}/send_transaction`