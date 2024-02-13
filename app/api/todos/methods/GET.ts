import { Document } from 'mongodb';

import mongoConnect from '@/ServerUtils/mongoConnect';

type SuccessGet = [{ data: Document[] }, { status: number }];
type ErrorGet = [{ data: { message: string } }, { status: number }];

type TodosGetReturn = Promise<SuccessGet | ErrorGet>;

type CatchError = {
  message: string;
};

const todosGet = async (): TodosGetReturn => {
  const mc = await mongoConnect('todos');

  if (!mc) {
    return [{ data: { message: 'Something went wrong with MongoConnection!' } }, { status: 500 }];
  }

  try {
    const data = await mc.collection
      .aggregate([
        {
          $addFields: {
            id: '$_id',
          },
        },
        {
          $project: {
            _id: 0,
          },
        },
      ])
      .toArray();

    return [{ data }, { status: 200 }];
  } catch (err) {
    const error = err as CatchError;

    return [{ data: { message: error.message } }, { status: 503 }];
  } finally {
    await mc.client.close();
  }
};

export default todosGet;
