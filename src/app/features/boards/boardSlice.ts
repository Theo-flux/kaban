import { createSlice } from '@reduxjs/toolkit';

type TBoardState = {
  activeBoard: string;
  boards: Array<string>;
};

const initialState: TBoardState = {
  activeBoard: '',
  boards: [],
};

const boardSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    SETACTIVEBOARD: (state, action) => {
      return {
        ...state,
        activeBoard: action.payload,
      };
    },

    SETBOARDS: (state, action) => {
      return {
        ...state,
        boards: action.payload,
      };
    },
  },
});

export default boardSlice.reducer;
export const boardActions = boardSlice.actions;
