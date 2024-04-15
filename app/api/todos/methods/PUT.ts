import TodoModel from '@/Models/todo';
import mongoConnect from '@/ServerUtils/mongoConnect';
import { TodoReq } from '@/Types/todos';

type CatchError = {
  message: string;
};

type TodoPut = (reqData: TodoReq, userId: string) => Promise<[{ data: { message: string } }, { status: number }]>;

const todoPut: TodoPut = async (reqData, userId) => {
  try {
    await mongoConnect();
  } catch (error) {
    return [{ data: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    await TodoModel.create({
      user: userId,
      ...reqData,
    });

    return [{ data: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    return [{ data: { message: error.message } }, { status: 503 }];
  }
};

export default todoPut;
