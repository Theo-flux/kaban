import mongoose, { models, model } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '@/utils';
import { taskSchema } from '@/schema/taskSchema';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { boardname } = req.query;
  const { method } = req;

  try {
    connectMongo();
    const myDb = mongoose.connection.useDb('boards');

    let NewBoard =
      myDb.models.NewBoard ||
      myDb.model(`${boardname}`, taskSchema, `${boardname}`);

    await NewBoard.createCollection();

    res.status(200).json({ name: req.query, message: 'board created!' });
  } catch (error) {
    res.status(400).json({ error });
  }
}
