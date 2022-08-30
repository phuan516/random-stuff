import clientPromise from "../../lib/mongoClient";

const handle = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const todoCollection = db.collection("todo");

  const { title, status } = JSON.parse(req.body);

  await todoCollection.updateOne({ title }, { $set: { status } });

  res.status(200).json();
};
export default handle;
