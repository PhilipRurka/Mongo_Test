import useSWRMutation from 'swr/mutation';

import updateTodoFetcher from '@/Fetchers/todos/updateTodoFetcher';
import { TodoFrontend, TodoReq } from '@/Types/todos';

import TodoForm from '../todoForm';

type EditTodoProps = {
  todo: TodoFrontend;
  handleTriggerCloseModal: () => void;
};

type UpdateTodos = (url: string, obj: { arg: TodoReq }) => Promise<Response | undefined>;

const updateTodoSWR: UpdateTodos = (url, { arg }) => updateTodoFetcher(arg);

const EditTodo = ({ todo, handleTriggerCloseModal }: EditTodoProps) => {
  const { trigger: updateTodo } = useSWRMutation('/api/todos', updateTodoSWR);

  const handleFormSubmit = async (editedTodo: TodoReq) => {
    await updateTodo({
      id: todo.id,
      ...editedTodo,
    });

    handleTriggerCloseModal();
  };

  return <TodoForm handleFormSubmit={handleFormSubmit} defaultValues={todo} />;
};

export default EditTodo;
