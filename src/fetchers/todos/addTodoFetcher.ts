import { TodoReq } from '@/Types/todos';

type AddTodoProps = TodoReq;

const addTodoFetcher = async (data: AddTodoProps) => {
  const response = await fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data }),
  });

  if (response.ok) return response;

  const res = await response.json();

  return res;
};

export default addTodoFetcher;
