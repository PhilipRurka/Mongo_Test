import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';

const envVariables = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const envPath = path.resolve(__dirname, '../../.env.local');
  
  dotenv.config({ path: envPath });
  
  const { MONGODB_URI, MONGODB_DATABASE, VERCEL_ENV } = process.env;

  return { MONGODB_URI, MONGODB_DATABASE, VERCEL_ENV }
}

export default envVariables