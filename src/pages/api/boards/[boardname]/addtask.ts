import mongoose, { Model } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '@/utils';
import { taskSchema } from '@/schema/taskSchema';
import { TColumnTask, TTask } from '@/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // try {
  //   const boardname = req.query.boardname as string;

  //   // create model based on board type
  //   const myDb = await connectMongo();
  //   const BoardModel = myDb.model(boardname, taskSchema, boardname);
  //   let data: TTask = {
  //     title: 'Write launch article to publish on multiple channels',
  //     description: '',
  //     status: 'Todo',
  //     subtasks: [
  //       {
  //         title: 'Write article',
  //         isCompleted: false,
  //       },
  //       {
  //         title: 'Publish on LinkedIn',
  //         isCompleted: false,
  //       },
  //       {
  //         title: 'Publish on Inndie Hackers',
  //         isCompleted: false,
  //       },
  //       {
  //         title: 'Publish on Medium',
  //         isCompleted: false,
  //       },
  //     ],
  //     index: 0,
  //   };

  //   // count the number of items in the board so as to update the index attribute
  //   let isStatus = await BoardModel.collection
  //     .find({ name: data.status })
  //     .count();

  //   let noOfTask = await BoardModel.aggregate([
  //     {
  //       $match: { name: data.status },
  //     },
  //     {
  //       $group: {
  //         _id: '$name',
  //         count: {
  //           $sum: { $size: '$tasks' },
  //         },
  //       },
  //     },
  //   ]).exec();

  //   console.log(noOfTask);

  //   let columnData: TColumnTask;

  //   if (isStatus == 0) {
  //     let count = 0;
  //     if (noOfTask.length > 0) {
  //       count = noOfTask[0].count;
  //     }

  //     console.log(count);

  //     data.index = count;
  //     columnData = {
  //       name: data.status,
  //       tasks: [{ ...data }],
  //     };

  //     let doc = new BoardModel(columnData);

  //     doc.save((err, data) => {
  //       if (err) return console.log(err);
  //       return data;
  //     });

  //     console.log(doc);
  //   } else {
  //     data.index = noOfTask[0].count;
  //     await BoardModel.findOneAndUpdate(
  //       { name: data.status },
  //       { $push: { tasks: data } }
  //     );
  //   }

  //   console.log(isStatus);

  //   res.status(200).json({ name: boardname, isStatus });
  // } catch (error) {
  //   res.json(error);
  // }
  res.status(200).json({ status: true });
}
