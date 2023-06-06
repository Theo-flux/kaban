import mongoose from 'mongoose';
import { taskSchema } from '@/schema/taskSchema';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '@/utils';

type TTask = {
  _id: string;
  title: string;
  description: string;
  status: string;
  subtasks: Array<{
    _id: string;
    title: string;
    isCompleted: boolean;
  }>;
  __v: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const boardname: string = req.query.boardname as string;
    const myDb = await connectMongo();
    let BoardName = myDb.model(`${boardname}`, taskSchema, `${boardname}`);
    let result: Array<TTask> = await BoardName.find({});

    res.status(200).json({ name: boardname, docs: result });
  } catch (error) {
    res
      .status(400)
      .json({ name: 'error getting the docs in this collection', docs: [] });
  }
}
