import mongoose, { Connection } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '@/utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    connectMongo();

    const myDb = mongoose.connection.useDb('boards');

    let collList = await myDb.db.listCollections().toArray();

    collList = collList.map(el => {
      return el.name;
    });

    res
      .status(200)
      .json({ name: 'All Kanban boards cluster', collections: collList });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error getting the collections!' });
  }
}
