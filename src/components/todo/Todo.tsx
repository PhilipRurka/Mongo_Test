import { useState } from 'react';
import useSWRMutation from 'swr/mutation';

import EditTodo from '@/Components/editTodo';
import Modal from '@/Components/modal';
import deleteTodoFetcher from '@/Fetchers/todos/deleteTodoFetcher';
import { TodoFrontend } from '@/Types/todos';

type TodoProps = {
  todo: TodoFrontend;
};

type DeleteTodos = (url: string, obj: { arg: string }) => Promise<Response | undefined>;

const deleteTodoSWR: DeleteTodos = (url, { arg }) => deleteTodoFetcher(arg);

const Todo = ({ todo }: TodoProps) => {
  const { id, title, message, priority, lastUpdated } = todo;

  const { trigger: deleteTodo } = useSWRMutation('/api/todos', deleteTodoSWR);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <>
      {isEditModalOpen && (
        <Modal width="md" handleCloseModal={handleCloseEditModal}>
          <EditTodo handleTriggerCloseModal={handleCloseEditModal} todo={todo} />
        </Modal>
      )}
      <div className="flex justify-between rounded-xl border border-cyan-600 p-4">
        <div>
          <span>{title}</span>
          <p>{message}</p>
          <span>{`Priority: ${priority}`}</span>
          <span className="block">{`Last Updated: ${lastUpdated}`}</span>
        </div>
        <div>
          <button className="rounded-xl border border-blue-400 bg-blue-200 p-2" onClick={handleOpenEditModal}>
            Edit
          </button>
          <button className="rounded-xl border border-red-400 bg-red-200 p-2" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
