'use client'

import addTodo from "@/fetchers/todos/addTodo"
import { Todos } from "../todos"
import useSWRMutation from 'swr/mutation'
import { TodoReq } from "@/types/todos"

type HomepageProps = {

}

type UpdateTodos = (url: string, obj: { arg: TodoReq }) => Promise<Response | undefined>

const updateTodosSWR: UpdateTodos = (_url, { arg }) => addTodo(arg)

const Homepage = (_rest :HomepageProps) => {
  const { trigger: updateTodos } = useSWRMutation('/api/todos', updateTodosSWR)

  const handleAddNewTodo = () => {
    updateTodos({
      title: '123',
      message: 'This is a test message!! Yay?',
      priority: "high"
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Todos />
      <button onClick={handleAddNewTodo}>Add new todo!</button>
    </main>
  )
}

export default Homepage