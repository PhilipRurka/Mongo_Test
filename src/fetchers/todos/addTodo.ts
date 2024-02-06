import { TodoReq } from '@/types/todos';

type AddTodoProps = TodoReq;

const addTodo = async (data: AddTodoProps) => {
  const response = await fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  });

  if (response.ok) return response;

  const res = await response.json();

  return res;
};

export default addTodo;
