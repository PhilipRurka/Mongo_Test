import useSWRMutation from 'swr/mutation';

import addTodoFetcher from '@/Fetchers/todos/addTodoFetcher';
import { TodoReq } from '@/Types/todos';

import TodoForm from '../todoForm';

type AddNewTodoProps = {
  handleCloseModal: () => void;
};
type UpdateTodos = (url: string, obj: { arg: TodoReq }) => Promise<Response | undefined>;

const updateTodoSWR: UpdateTodos = (url, { arg }) => addTodoFetcher(arg);

const AddNewTodo = ({ handleCloseModal }: AddNewTodoProps) => {
  const { trigger: addTodo } = useSWRMutation('/api/todos', updateTodoSWR);

  const handleAddTodo = ({ title, message, priority }: TodoReq) => {
    addTodo({
      title,
      message,
      priority,
    });

    handleCloseModal();
  };

  return <TodoForm handleFormSubmit={handleAddTodo} />;
};

export default AddNewTodo;
