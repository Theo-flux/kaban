import mongoose from 'mongoose';

export const taskSchema = new mongoose.Schema({
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
