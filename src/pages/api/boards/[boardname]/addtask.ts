import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '@/utils';
import { taskSchema } from '@/schema/taskSchema';

type TTask = {
  title: string;
  description: string;
  status: string;
  subtasks: Array<{
    title: string;
    isCompleted: boolean;
  }>;
};

// function to create a single task
const createATask = (boardname: string | string[] | undefined, data: TTask) => {
  const myDb = mongoose.connection.useDb('boards');

  let BoardName = myDb.model(`${boardname}`, taskSchema, `${boardname}`);
  let doc = new BoardName(data);

  doc.save((err, data) => {
    if (err) return console.log(err);
    return data;
  });
};

// function to create multiple tasks
const createManyTasks = (
  boardname: string | string[] | undefined,
  data: Array<TTask>
) => {
  const myDb = mongoose.connection.useDb('boards');

  let BoardName = myDb.model(`${boardname}`, taskSchema, `${boardname}`);

  BoardName.create(data, (err, data) => {
    if (err) return console.log(err);
    return data;
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { boardname } = req.query;
  const { method } = req;

  // create model based on board type
  connectMongo();

  // const data: TTask = {};

  // createATask(boardname, data);

  res.status(200).json({ name: boardname });
}
