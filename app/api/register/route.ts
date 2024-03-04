import { NextRequest, NextResponse } from 'next/server';

import register from './methods/POST';

/* eslint-disable import/prefer-default-export */
export const POST = async (req: NextRequest) => {
  const reqData = await req.json();
  const [data, status] = await register(reqData);

  return NextResponse.json(data, status);
};
