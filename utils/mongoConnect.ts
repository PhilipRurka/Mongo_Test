import { Collection, Document, MongoClient } from 'mongodb';

type CollectionsOptions = 'todos'
type MongoReturn = undefined | {
  client: MongoClient;
  collection: Collection<Document>;
}
type MongoConnect = (collection: CollectionsOptions) => Promise<MongoReturn>

export const mongoConnect: MongoConnect = async (collection) => {
  try {
    if(!process.env.MONGODB_URI) {
      throw Error('Client Failed')
    }
    
    let client = new MongoClient(process.env.MONGODB_URI);
  
    await client.connect();
    const database = client.db(process.env.MONGODB_DATABASE);
    
    return {client, collection: database.collection(collection)};

  } catch(error) {
    console.error(`Bad connection with MongoDB -> Database: ${process.env.MONGODB_DATABASE} -> Collection: ${collection}`)
    
    return
  }
}
