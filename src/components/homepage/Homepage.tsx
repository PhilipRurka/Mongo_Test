'use client';

import useSWRMutation from 'swr/mutation';

import addTodo from '@/fetchers/todos/addTodo';
import { TodoReq } from '@/types/todos';

import { Todos } from '../todos';

type UpdateTodos = (url: string, obj: { arg: TodoReq }) => Promise<Response | undefined>;

const updateTodosSWR: UpdateTodos = (url, { arg }) => addTodo(arg);

const Homepage = () => {
  const { trigger: updateTodos } = useSWRMutation('/api/todos', updateTodosSWR);

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
