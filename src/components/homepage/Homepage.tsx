'use client';

import useSWRMutation from 'swr/mutation';

import Todos from '@/Components/todos';
import addTodoFetcher from '@/Fetchers/todos/addTodoFetcher';
import { TodoReq } from '@/Types/todos';

type UpdateTodos = (url: string, obj: { arg: TodoReq }) => Promise<Response | undefined>;

const updateTodoSWR: UpdateTodos = (url, { arg }) => addTodoFetcher(arg);

const Homepage = () => {
  const { trigger: updateTodos } = useSWRMutation('/api/todos', updateTodoSWR);

  const handleAddNewTodo = () => {
    updateTodos({
      title: '123',
      message: 'This is a test message!! Yay?',
      priority: 'low',
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Todos />
      <button onClick={handleAddNewTodo}>Add new todo!</button>
    </main>
  );
};

export default Homepage;
