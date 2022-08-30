import clientPromise from "../../lib/mongoClient";

const handle = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const labelsCollection = db.collection("labels");
  const todoCollection = db.collection("todo");

  const { title, labelsToAdd, dueDate } = JSON.parse(req.body);

  const labels = await labelsCollection
    .find({ name: { $in: [...labelsToAdd.map((label) => label.value)] } })
    .toArray();

  await todoCollection.insertOne({
    title,
    labels,
    dueDate: new Date(dueDate),
    status: "In Progress",
  });

  res.status(200).json();
};
export default handle;
