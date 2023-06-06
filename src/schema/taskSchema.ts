import { Schema } from 'mongoose';

export const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tasks: [
    {
      index: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      status: {
        type: String,
        required: true,
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
