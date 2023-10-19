export { default } from 'next-auth/middleware'

export const config = {
  // *: 0 或 多个
  // +: 1 或 多个
  // ?: 0 或 1个
  matcher: ['/users/:id*']
}