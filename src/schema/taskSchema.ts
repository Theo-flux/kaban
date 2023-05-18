import { Schema } from 'mongoose';

export const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
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
});
