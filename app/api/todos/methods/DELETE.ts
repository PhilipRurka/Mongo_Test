import { ObjectId } from 'mongodb';

import TodoModel from '@/Models/todo';
import mongoConnect from '@/ServerUtils/mongoConnect';

type TodoPostReturn = Promise<[{ data: { message: string } }, { status: number }]>;

type CatchError = {
  message: string;
};

const todosDelete = async (reqData: ObjectId): TodoPostReturn => {
  try {
    await mongoConnect();
  } catch (error) {
    return [{ data: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const reqDataObjectId = new ObjectId(reqData);

    const response = await TodoModel.collection.deleteOne({ _id: reqDataObjectId });

    if (response.deletedCount > 0) {
      return [{ data: { message: 'Success!' } }, { status: 200 }];
    }

    return [{ data: { message: 'Todos was not found!' } }, { status: 402 }];
  } catch (err) {
    const error = err as CatchError;

    return [{ data: { message: error.message } }, { status: 503 }];
  }
};

export default todosDelete;
