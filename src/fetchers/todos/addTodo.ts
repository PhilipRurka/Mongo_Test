import { TodoReq } from "@/types/todos";

type AddTodoProps = TodoReq

const addTodo = async (data: AddTodoProps) => {
  const response = await fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data })
  });
  
  if (response.ok) return response
    
  console.error(response.statusText)
}

export default addTodo