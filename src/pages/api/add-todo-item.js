import clientPromise from "../../lib/mongoClient";

const handle = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const labelsCollection = db.collection("labels");
  const todoCollection = db.collection("todo");

  const { title, labelsToAdd, dueDate } = JSON.parse(req.body);

  const labels = await labelsCollection
    .find({ name: { $in: [...labelsToAdd] } })
    .toArray();

  await todoCollection.insertOne({
    title,
    labels,
    dueDate,
    status: "in progress",
  });

  res.status(200).json();
};
export default handle;
