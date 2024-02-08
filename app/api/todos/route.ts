import { NextRequest, NextResponse } from 'next/server';

import todosDelete from './methods/DELETE';
import todosGet from './methods/GET';
import todosPost from './methods/POST';

export const GET = async () => {
  const [data, status] = await todosGet();

  return NextResponse.json(data, status);
};

export const POST = async (req: NextRequest) => {
  const reqData = await req.json();
  const [data, status] = await todosPost(reqData);

  return NextResponse.json(data, status);
};

export const DELETE = async (req: NextRequest) => {
  const reqData = await req.json();
  const [data, status] = await todosDelete(reqData);

  return NextResponse.json(data, status);
};
