import { createSlice } from '@reduxjs/toolkit';

type TInitialState = {
  activeboard: string;
};

const initialState: TInitialState = {
  activeboard: 'Home',
};

type TBoardAction = {
  payload: string;
};

const boardSlice = createSlice({
  name: 'boardslice',
  initialState,
  reducers: {
    SETACTIVEBOARD: (state: TInitialState, action: TBoardAction) => {
      return {
        ...state,
        activeboard: action.payload,
      };
    },
  },
});

export default boardSlice.reducer;
export const boardActions = boardSlice.actions;
