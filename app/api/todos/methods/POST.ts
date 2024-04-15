import { ObjectId } from 'mongodb';

import TodoModel from '@/Models/todo';
import mongoConnect from '@/ServerUtils/mongoConnect';
import { TodoReq } from '@/Types/todos';

type TodoPostReturn = Promise<[{ data: { message: string } }, { status: number }]>;

type CatchError = {
  message: string;
};

type TodoPost = (reqData: TodoReq, userId: string) => TodoPostReturn;

const todosPost: TodoPost = async (reqData, userId) => {
  try {
    await mongoConnect();
  } catch (error) {
    return [{ data: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    await TodoModel.updateOne({ _id: new ObjectId(reqData.id), user: new ObjectId(userId) }, reqData);

    return [{ data: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    return [{ data: { message: error.message } }, { status: 503 }];
  }
};

export default todosPost;
