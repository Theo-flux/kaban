import { TDoc } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: TDoc = {
  _id: '',
  title: '',
  description: '',
  status: '',
  subtasks: [
    {
      _id: '',
      title: '',
      isCompleted: false,
    },
  ],
  index: 0,
  __v: 0,
};

type TAction = {
  payload: TDoc;
};

const boardSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    SETACTIVETASK: (state: TDoc, action: TAction) => {
      const { payload } = action;
      return {
        _id: payload._id,
        title: payload.title,
        description: payload.description,
        status: payload.status,
        subtasks: [...payload.subtasks],
        index: payload.index,
        __v: payload.__v,
      };
    },
  },
});

export default boardSlice.reducer;
export const boardActions = boardSlice.actions;
