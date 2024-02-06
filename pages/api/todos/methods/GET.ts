import { NextApiResponse } from 'next';

import { mongoConnect } from '@/serverUtils/mongoConnect';

const todosGet = async (res: NextApiResponse) => {
  const mc = await mongoConnect('todos');
  if (!mc) {
    res.status(500).json({ message: 'Something went wrong with MongoConnection!' });

    return;
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

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
    console.log(JSON.stringify(error, null, 2));
  } finally {
    await mc.client.close();
  }
};

export default todosGet;
