import mongoose, { Connection } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '@/utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    connectMongo();

    mongoose.connection.useDb('boards');

    // console.log(await mongoose.connection.db.listCollections().toArray());

    res.status(200).json({ name: 'All Kanban boards cluster' });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
