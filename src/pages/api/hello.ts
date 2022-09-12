// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "../../lib/mongo-client";

const handler = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const collection = db.collection("todo");

  const doc = await collection.find({}).project({ _id: 0 }).toArray();

  res.status(200).json(doc);
};

export default handler;
