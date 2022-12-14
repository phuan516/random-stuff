import { ObjectId } from "mongodb";

import clientPromise from "../../lib/mongo-client";

const handle = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const labelsCollection = db.collection("labels");
  const todoCollection = db.collection("todo");

  const { id, newTitle, newDueDate, newLabels } = JSON.parse(req.body);

  console.log(id, newTitle, newDueDate, newLabels);

  const labels = await labelsCollection
    .find({ name: { $in: [...newLabels.map((label) => label.value)] } })
    .toArray();

  await todoCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    {
      $set: {
        title: newTitle,
        labels,
        dueDate: new Date(newDueDate),
        updatedAt: new Date(),
      },
    }
  );

  res.status(200).json();
};
export default handle;
