import { dbConnection } from "./mongodb";

export async function validateUser(username: string, password: string) {
  try {
    const db = await dbConnection();
    const collection = db.collection("users");
    
    const user = await collection.findOne({ username });
    
    if (user && user.password === password) {
      return user;
    }
    
    return null;
  } catch (error) {
    console.error("Error validating user:", error);
    return null;
  }
}

export async function storeUserLogin(username: string) {
  try {
    const db = await dbConnection();
    const collection = db.collection("users");
    
    await collection.updateOne(
      { username },
      { $set: { lastLogin: new Date() } }
    );
  } catch (error) {
    console.error("Error storing user login:", error);
  }
}
