import { NextRequest, NextResponse } from 'next/server';

import getUserId from '@/ServerUtils/getUserId';

import todosDelete from './methods/DELETE';
import todosGet from './methods/GET';
import todosPost from './methods/POST';
import todosPut from './methods/PUT';

export const GET = async (req: NextRequest) => {
  const userId = await getUserId(req);

  const [data, status] = await todosGet(userId);

  return NextResponse.json(data, status);
};

export const PUT = async (req: NextRequest) => {
  const userId = await getUserId(req);
  const reqData = await req.json();

  const [data, status] = await todosPut(reqData, userId);

  return NextResponse.json(data, status);
};

export const POST = async (req: NextRequest) => {
  const userId = await getUserId(req);
  const reqData = await req.json();

  const [data, status] = await todosPost(reqData, userId);

  return NextResponse.json(data, status);
};

export const DELETE = async (req: NextRequest) => {
  const userId = await getUserId(req);
  const reqData = await req.json();

  const [data, status] = await todosDelete(reqData, userId);

  return NextResponse.json(data, status);
};
