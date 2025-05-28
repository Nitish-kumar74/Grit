import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let db;

async function connectDB() {
  if (!uri) {
    throw new Error('MONGODB_URI is not defined in .env.local');
  }

  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
    db = client.db('Login');
    console.log("Connected to MongoDB database:", db.databaseName);
    
    // Create indexes
    await db.collection('users').createIndex({ email: 1 }, { unique: true });
  }

  return db;
}

export default connectDB;