import mongoose, { models, model } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '@/utils';
import { taskSchema } from '@/schema/taskSchema';
import { TColumnTask } from '@/types';
import { resolve } from 'styled-jsx/css';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const boardname = req.query.boardname as string;
  const cols = req.query.cols as Array<string>;

  try {
    connectMongo();
    const myDb = mongoose.connection.useDb('boards');

    let NewBoardModel =
      myDb.models.NewBoard ||
      myDb.model(`${boardname}`, taskSchema, `${boardname}`);

    await NewBoardModel.createCollection();

    if (cols.length != 0) {
      let columnDataArr: Array<TColumnTask> = cols.map(col => {
        return { name: col, tasks: [] };
      });

      console.log(columnDataArr);
      await NewBoardModel.create(columnDataArr);
    }

    res
      .status(200)
      .json({ name: boardname, cols: cols, message: 'board created!' });
  } catch (error) {
    res.status(400).json({ error });
  }
}
