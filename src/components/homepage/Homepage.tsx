'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';

import Todos from '@/Components/todos';

import AddNewTodo from '../addNewTodo';
import Modal from '../modal';

const Homepage = () => {
  const [isNewTodoModalOpen, setIsNewTodoModalOpen] = useState(false);

  const { data: session } = useSession();

  const handleOpenNewTodoModal = () => {
    setIsNewTodoModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsNewTodoModalOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isNewTodoModalOpen && (
        <Modal width="md" handleCloseModal={handleCloseModal}>
          <AddNewTodo handleCloseModal={handleCloseModal} />
        </Modal>
      )}
      <h1>User: {session?.user?.email}</h1>
      <Todos />
      <button onClick={handleOpenNewTodoModal}>Add new todo!</button>
    </main>
  );
};

export default Homepage;
