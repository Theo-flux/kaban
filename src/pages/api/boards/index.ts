// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '@/utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log('CONNECTING TO MONGO');
    connectMongo();
    console.log('CONNECTED TO MONGO');

    res.status(200).json({ name: 'All Kanban boards cluster' });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
