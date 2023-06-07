import { createSlice } from '@reduxjs/toolkit';

type TStatus = {
  allStatus: Array<string>;
};

type TAction = {
  payload: Array<string>;
};

const initialState: TStatus = {
  allStatus: [],
};

const allStatusSlice = createSlice({
  name: 'boardStatuses',
  initialState,
  reducers: {
    SETBOARDALLSTATUS: (state: TStatus, action: TAction) => {
      return {
        allStatus: action.payload,
      };
    },
  },
});

export default allStatusSlice.reducer;
export const allStatusActions = allStatusSlice.actions;
