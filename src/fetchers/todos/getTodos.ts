import { TodosRes } from '@/types/todos';

type GetTodosProps = {
  signal: AbortSignal;
};

const getTodos = async (props?: GetTodosProps) => {
  const signalObj = props ? { signal: props.signal } : {};

  const response = await fetch('/api/todos', {
    ...signalObj,
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    console.error(response.statusText);
  }

  const { data }: TodosRes = await response.json();
  return data;
};

export default getTodos;
