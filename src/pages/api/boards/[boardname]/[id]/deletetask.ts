import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let boardname: string = req.query.boardname as string;
    let id: string = req.query.id as string;

    res.status(200).json({ name: boardname, id: id });
  } catch (error) {
    res.status(400).json({ mssg: error });
  }
}
