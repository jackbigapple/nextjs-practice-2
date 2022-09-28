import { MongoClient } from "mongodb";
// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    //   const { title, image, address, description } = data;
    console.log(data)

    const client = await MongoClient.connect("mongodb+srv://...............");
    const db = client.db();

    const meeetupsCollection = db.collection("meetups");

    const result = await meeetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
