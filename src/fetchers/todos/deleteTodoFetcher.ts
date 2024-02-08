type DeleteTodoProps = string;

const deleteTodoFetcher = async (data: DeleteTodoProps) => {
  const response = await fetch('/api/todos', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) return response;

  const res = await response.json();

  return res;
};

export default deleteTodoFetcher;
