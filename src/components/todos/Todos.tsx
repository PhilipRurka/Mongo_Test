import { Todo } from '@/components/todo';
import useGetTodos from '@/hooks/swr/useGetTodos';

const Todos = () => {
  const { todos } = useGetTodos();

  return <div>{todos && todos.map((todo) => <Todo key={`todo-${todo.id}`} todo={todo} />)}</div>;
};

export default Todos;
