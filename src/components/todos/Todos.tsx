import { Todo } from '@/components/todo';
import useGetTodos from '@/hooks/swr/useGetTodos';

const Todos = () => {
  const { todos, isTodosLoading, isTodosError } = useGetTodos()

  return (
    <div>
      {todos && todos.map((todo) => (
        <Todo key={`todo-${todo._id}`} todo={todo} />
      ))}
    </div>
  )
}

export default Todos