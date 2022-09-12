import clientPromise from "../../lib/mongo-client";

const handle = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const todoCollection = db.collection("todo");

  const todo = await todoCollection
    .aggregate([
      {
        $match: {
          status: { $in: ["Ready", "Working", "Done"] },
        },
      },
      {
        $group: {
          _id: "$dueDate",
          list: {
            $push: "$$ROOT",
          },
        },
      },
      { $sort: { _id: 1 } },
    ])
    .toArray();

  res.status(200).json(todo);
};
export default handle;
