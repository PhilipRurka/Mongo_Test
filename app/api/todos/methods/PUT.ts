import mongoConnect from '@/ServerUtils/mongoConnect';
import { Todo, TodoReq } from '@/Types/todos';

type TodoPostReturn = Promise<[{ data: { message: string } }, { status: number }]>;

type CatchError = {
  message: string;
};

const todosPost = async (reqData: TodoReq): TodoPostReturn => {
  const todo: Todo = {
    ...reqData,
    created_at: new Date(),
    last_updated: new Date(),
  };

  const mc = await mongoConnect('todos');
  if (!mc) {
    return [{ data: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    await mc.collection.insertOne(todo);

    return [{ data: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    return [{ data: { message: error.message } }, { status: 503 }];
  } finally {
    await mc.client.close();
  }
};

export default todosPost;
