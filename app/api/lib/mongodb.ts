import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URL as string;
let client: MongoClient;

export const dbConnection = async () => {
  try {
    if (!client) {
      client = new MongoClient(uri);
      await client.connect();
      console.log("MongoDB connected successfully");
    }
    return client.db("authapp");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
