import clientPromise from "../../lib/mongo-client";

const handle = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const labelsCollection = db.collection("labels");

  const labels = JSON.parse(req.body);

  await labelsCollection.deleteMany({
    name: { $in: labels.map((label) => label.value) },
  });

  res.status(200).json();
};
export default handle;
