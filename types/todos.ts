export type Todo = {
  title: string;
  message: string;
  created_at: Date;
  last_updated: Date;
  priority: 'low' | 'medium' | 'high';
};

export type TodoReq = {
  title: string;
  message: string;
  priority: 'low' | 'medium' | 'high';
};

export type TodoFrontend = {
  _id: string;
  title: string;
  created_at: Date;
  last_updated: Date;
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
