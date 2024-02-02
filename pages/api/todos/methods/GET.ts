import { mongoConnect } from '@/serverUtils/mongoConnect';
import { NextApiResponse } from 'next';

const todosGet = async (res: NextApiResponse) => {
  const mc = await mongoConnect('todos');
  if (!mc) {
    res.status(500).json({ message: 'Something went wrong with MongoConnection!' });

    return;
  }

  try {
    const data = await mc.collection.find().toArray();

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
    console.log(JSON.stringify(error, null, 2));
  } finally {
    await mc.client.close();
  }
};

export default todosGet;
