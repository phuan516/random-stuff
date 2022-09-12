import clientPromise from "../../lib/mongo-client";

const handle = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const labelsCollection = db.collection("labels");

  const labels = await labelsCollection.find({}).toArray();

  res.status(200).json(labels);
};
export default handle;
