import clientPromise from "../../lib/mongoClient";

const handle = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const todoCollection = db.collection("todo");

  const todos = await todoCollection.find({}).toArray();

  res.status(200).json(todos);
};
export default handle;
