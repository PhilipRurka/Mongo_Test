import { Todo } from '@/Components/todo';
import useGetTodos from '@/Hooks/swr/useGetTodos';

const Todos = () => {
  const { todos } = useGetTodos();

  return (
    <div className="flex flex-col gap-4">
      {todos && todos.map((todo) => <Todo key={`todo-${todo.id}`} todo={todo} />)}
    </div>
  );
};

export default Todos;
