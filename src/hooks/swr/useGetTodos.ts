import useSWR from 'swr';

import getTodosFetcher from '@/Fetchers/todos/getTodosFetcher';

const useGetTodos = () => {
  const { data, isLoading, error } = useSWR(`/api/todos`, () => getTodosFetcher());

  const trimData = data ? data.data : undefined;

  return {
    todos: trimData,
    isTodosLoading: isLoading,
    isTodosError: error,
  };
};

export default useGetTodos;
