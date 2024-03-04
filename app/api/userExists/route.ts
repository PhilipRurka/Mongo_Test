import { NextRequest, NextResponse } from 'next/server';

import userExists from './methods/POST';

/* eslint-disable import/prefer-default-export */
export const POST = async (req: NextRequest) => {
  const reqData = await req.json();
  const [data, status] = await userExists(reqData);

  return NextResponse.json(data, status);
};
