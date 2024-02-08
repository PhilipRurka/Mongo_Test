import { FetchError } from '@/Types/fetch';
import { TodosRes } from '@/Types/todos';

type GetTodosProps = {
  signal: AbortSignal;
};

const getTodosFetcher = async (props?: GetTodosProps) => {
  const signalObj = props ? { signal: props.signal } : {};

  const response = await fetch('/api/todos', {
    ...signalObj,
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    const error: FetchError = new Error('An error occurred while fetching the getTodos data');
    error.info = await response.json;
    error.status = response.status;
    throw error;
  }

  const data: TodosRes = await response.json();
  return data;
};

export default getTodosFetcher;
