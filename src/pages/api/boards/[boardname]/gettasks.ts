import mongoose from 'mongoose';
import { taskSchema } from '@/schema/taskSchema';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '@/utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // try {
  //   const boardname: string = req.query.boardname as string;
  //   let docs: Array<any> = [];
  //   await connectMongo();
  //   const myDb = mongoose.connection.useDb('boards');
  //   let BoardName = myDb.model(`${boardname}`, taskSchema, `${boardname}`);
  //   await BoardName.find({}, (err, data) => {
  //     if (err) {
  //       return console.log(err);
  //     }
  //     console.log(data);
  //     docs = data;
  //   });
  //   res.status(200).json({ name: boardname, docs: docs });
  // } catch (error) {}

  const boardname: string = req.query.boardname as string;
  res.status(200).json({ name: boardname });
}
