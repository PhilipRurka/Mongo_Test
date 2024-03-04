import nextAuthMiddleware from 'next-auth/middleware';

export const config = {
  matcher: ['/dashboard'],
};

export default nextAuthMiddleware;
