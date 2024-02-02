import getTodos from "@/fetchers/todos/getTodos"
import useSWR from "swr"

const useGetTodos = () => {
  const {
    data,
    isLoading,
    error
  } = useSWR(`/api/todos`, () => getTodos())

  return {
    todos: data,
    isTodosLoading: isLoading,
    isTodosError: error
  }
}

export default useGetTodos
