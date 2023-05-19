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

  if (method == 'GET') {
    try {
      await connectMongo();
      const myDb = mongoose.connection.useDb('boards');

      let NewBoard = myDb.models.NewBoard || myDb.model(`${boardname}`, taskSchema);

      await NewBoard.create();
      console.log('New board created successfully!');

      res.status(200).json({ name: boardname, mssg: 'board created!' });
    } catch (error) {
      res.json({ error });
    }
  }
}
