
import { NextApiRequest, NextApiResponse } from 'next';
import todosPost from './methods/POST';
import todosGet from './methods/GET';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      todosGet(res)
      break;

    case 'POST':
      todosPost(req.body.data, res)
      break;
  
    default:
      res.status(405).json({ message: 'Method not allowed!' });
      
      break;
  }
}