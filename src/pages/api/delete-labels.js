import clientPromise from "../../lib/mongoClient";

const handle = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const labelsCollection = db.collection("labels");

  const labels = JSON.parse(req.body);

  await labelsCollection.deleteOne({
    name: { $in: labels.map((label) => label.value) },
  });

  res.status(200).json();
};
export default handle;
