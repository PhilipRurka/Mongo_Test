import { ObjectId } from 'mongodb';

import TodoModel from '@/Models/todo';
import mongoConnect from '@/ServerUtils/mongoConnect';

type TodoPostReturn = Promise<[{ data: { message: string } }, { status: number }]>;

type CatchError = {
  message: string;
};

type TodosDelete = (reqData: ObjectId, userId: string) => TodoPostReturn;

const todosDelete: TodosDelete = async (reqData, userId) => {
  try {
    await mongoConnect();
  } catch (error) {
    return [{ data: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const response = await TodoModel.collection.deleteOne({ _id: new ObjectId(reqData), user: new ObjectId(userId) });

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
