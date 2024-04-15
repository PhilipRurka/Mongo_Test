import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

type GetUserId = (req: NextRequest) => Promise<string>;

const getUserId: GetUserId = async (req) => {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (token && token.sub) {
    return token.sub;
  }

  throw new Error('Unable to retrieve user ID from token');
};

export default getUserId;
