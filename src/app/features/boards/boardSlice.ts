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
};

type TAction = {
  payload: TDoc;
};

type TSubtaskAction = {
  payload: {
    index: number;
    isCompleted: boolean;
  };
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
      };
    },

    EDITISCOMPLETE: (state: TDoc, action: TSubtaskAction) => {
      const { payload } = action;
      return {
        ...state,
        subtasks: state.subtasks.map((subtask, i) =>
          i === payload.index
            ? { ...subtask, isCompleted: payload.isCompleted }
            : subtask
        ),
      };
    },
  },
});

export default boardSlice.reducer;
export const boardActions = boardSlice.actions;
