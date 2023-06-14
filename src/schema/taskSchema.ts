import { Schema } from 'mongoose';

export const taskSchema = new Schema({
  name: {
    type: String,
  },
  tasks: [
    {
      index: {
        type: Number,
      },
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      status: {
        type: String,
      },
      subtasks: [
        {
          title: {
            type: String,
          },
          isCompleted: {
            type: Boolean,
          },
        },
      ],
    },
  ],
});
