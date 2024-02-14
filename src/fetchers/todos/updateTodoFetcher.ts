import { TodoReq } from '@/Types/todos';

type UpdateTodoProps = TodoReq;

const updateTodoFetcher = async (data: UpdateTodoProps) => {
  const response = await fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) return response;

  const res = await response.json();

  return res;
};

export default updateTodoFetcher;
