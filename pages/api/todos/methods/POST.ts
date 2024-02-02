import { NextApiResponse } from 'next';
import { mongoConnect } from '@/serverUtils/mongoConnect';
import { Todo, TodoReq } from '@/types/todos';

const todosPost = async (data: TodoReq, res: NextApiResponse) => {
  const todo: Todo = {
    ...data,
    created_at: new Date(),
    last_updated: new Date(),
  };

  const mc = await mongoConnect('todos');
  if (!mc) {
    res.status(500).json({ message: 'Something went wrong with MongoConnection!' });

    return;
  }

  try {
    await mc.collection.insertOne(todo);

    res.status(200).json({ message: 'Data saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
    console.log(JSON.stringify(error, null, 2));
  } finally {
    await mc.client.close();
  }
};

export default todosPost;
