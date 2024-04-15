import { Types } from 'mongoose';

export type Todo = {
  title: string;
  message: string;
  created_at: Date;
  last_updated: Date;
  priority: 'low' | 'medium' | 'high';
  user: Types.ObjectId;
};

export type TodoReq = {
  id?: string;
  title: string;
  message: string;
  priority: 'low' | 'medium' | 'high';
};

export type TodoFrontend = {
  id: string;
  title: string;
  createdAt: Date;
  lastUpdated: Date;
  message: string;
  priority: 'low' | 'medium' | 'high';
};

export type TodosFrontend = TodoFrontend[];

export type TodoRes = {
  data: TodoFrontend;
};

export type TodosRes = {
  data: TodosFrontend;
};
