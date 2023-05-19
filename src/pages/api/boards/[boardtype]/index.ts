import { models, model } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '@/utils';
import { taskSchema } from '@/schema/taskSchema';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { boardtype } = req.query;
  const { method } = req;

  // create model based on board type

  try {
    await connectMongo();

    const data = {
      title: 'Build UI for onboarding flow',
      description: '',
      status: 'Todo',
      subtasks: [
        {
          title: 'Sign up page',
          isCompleted: true,
        },
        {
          title: 'Sign in page',
          isCompleted: false,
        },
        {
          title: 'Welcome page',
          isCompleted: false,
        },
      ],
    };

    res.status(200).json({ name: boardtype, task: data });
  } catch (error) {
    res.json({ error });
  }
}
