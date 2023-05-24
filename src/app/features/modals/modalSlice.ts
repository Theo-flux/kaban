'use-client';
import { createSlice } from '@reduxjs/toolkit';

type TModalState = {
  isDeleteBoardModal: boolean;
  isAddTaskModal: boolean;
  isEditBoardModal: boolean;
};

const initialState: TModalState = {
  isDeleteBoardModal: false,
  isAddTaskModal: false,
  isEditBoardModal: false,
};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    DELETEBOARD: state => {
      return {
        ...state,
        isDeleteBoardModal: !state.isDeleteBoardModal,
      };
    },

    EDITBOARD: state => {
      return {
        ...state,
        isEditBoardModal: !state.isEditBoardModal,
      };
    },

    ADDTASK: state => {
      return {
        ...state,
        isAddTaskModal: !state.isAddTaskModal,
      };
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
