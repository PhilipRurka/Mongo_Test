import { NextRequest, NextResponse } from 'next/server';

import todosDelete from './methods/DELETE';
import todosGet from './methods/GET';
import todosPost from './methods/POST';
import todosPut from './methods/PUT';

export const GET = async () => {
  const [data, status] = await todosGet();

  return NextResponse.json(data, status);
};

export const PUT = async (req: NextRequest) => {
  const reqData = await req.json();
  const [data, status] = await todosPut(reqData);

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
