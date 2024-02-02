import { TodoFrontend } from '@/types/todos';

type TodoProps = {
  todo: TodoFrontend;
};

const Todo = ({ todo: { _id, title, message, priority, last_updated } }: TodoProps) => {
  return (
    <div className="mb-4">
      <span>{title}</span>
      <p>{message}</p>
      <span>{`Priority: ${priority}`}</span>
      <span className="block">{`Last Updated: ${last_updated}`}</span>
    </div>
  );
};

export default Todo;
