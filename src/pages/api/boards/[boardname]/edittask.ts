import { NextApiResponse, NextApiRequest } from 'next';

export default async function EdittaskPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ name: 'Edit task' });
}
