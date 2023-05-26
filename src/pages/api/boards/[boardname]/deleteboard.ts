import { connectMongo } from '@/utils';
import mongoose from 'mongoose';
import { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const boardname: string = req.query.boardname as string;

  try {
    await connectMongo();

    const myDb = mongoose.connection.useDb('boards');
    let result = await myDb.dropCollection(boardname);

    res
      .status(200)
      .json({ status: result, message: 'board successfully deleted!' });
  } catch (error) {
    res.status(400).json({ status: false, message: error });
  }
}
