import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongo-client";

const handle = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const todoCollection = db.collection("todo");

  const { id, status } = JSON.parse(req.body);

  await todoCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { status } }
  );

  const fortNight = new Date(Date.now() - 12096e5);

  await todoCollection.deleteMany({
    status: "Deleted",
    dueDate: { $lt: fortNight },
  });

  res.status(200).json();
};
export default handle;
