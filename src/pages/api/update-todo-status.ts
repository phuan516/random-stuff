import clientPromise from "../../lib/mongo-client";

const handle = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const todoCollection = db.collection("todo");

  const { title, status } = JSON.parse(req.body);

  await todoCollection.updateOne({ title }, { $set: { status } });

  const fortNight = new Date(Date.now() - 12096e5);

  await todoCollection.deleteMany({
    status: "Deleted",
    dueDate: { $lt: fortNight },
  });

  res.status(200).json();
};
export default handle;
