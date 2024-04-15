import { Document, ObjectId } from 'mongodb';

import TodoModel from '@/Models/todo';
import mongoConnect from '@/ServerUtils/mongoConnect';

type SuccessGet = [{ data: Document[] }, { status: number }];
type ErrorGet = [{ data: { message: string } }, { status: number }];

type TodosGetReturn = (userId: string) => Promise<SuccessGet | ErrorGet>;

type CatchError = {
  message: string;
};

const todosGet: TodosGetReturn = async (userId) => {
  try {
    await mongoConnect();
  } catch (error) {
    return [{ data: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const data = await TodoModel.collection
      .aggregate([
        {
          $match: {
            user: new ObjectId(userId),
          },
        },
        {
          $addFields: {
            id: '$_id',
            lastUpdated: '$last_updated',
            createdAt: '$created_at',
          },
        },
        {
          $project: {
            _id: 0,
            _last_updated: 0,
            _created_at: 0,
          },
        },
      ])
      .toArray();

    return [{ data }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    return [{ data: { message: error.message } }, { status: 503 }];
  }
};

export default todosGet;
