import { ObjectId } from 'mongodb';

import TodoModel from '@/Models/todo';
import mongoConnect from '@/ServerUtils/mongoConnect';
import { TodoReq } from '@/Types/todos';

type TodoPostReturn = Promise<[{ data: { message: string } }, { status: number }]>;

type CatchError = {
  message: string;
};

const todosPost = async (reqData: TodoReq): TodoPostReturn => {
  try {
    await mongoConnect();
  } catch (error) {
    return [{ data: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const reqDataObjectId = new ObjectId(reqData.id);
    await TodoModel.updateOne({ _id: reqDataObjectId }, reqData);

    return [{ data: { message: 'Success!' } }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    return [{ data: { message: error.message } }, { status: 503 }];
  }
};

export default todosPost;
