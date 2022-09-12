import clientPromise from "../../lib/mongo-client";

const handle = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const labelsCollection = db.collection("labels");

  const { name, color } = JSON.parse(req.body);

  await labelsCollection.insertOne({ name, color: color.hex.substring(1) });

  res.status(200).json();
};
export default handle;
