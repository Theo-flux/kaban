'use-client';
import { createSlice } from '@reduxjs/toolkit';

type TModalState = {
  isDeleteBoardModal: boolean;
  isAddTaskModal: boolean;
  isEditBoardModal: boolean;
  isAddBoardModal: boolean;
  isTaskModal: boolean;
};

const initialState: TModalState = {
  isDeleteBoardModal: false,
  isAddTaskModal: false,
  isEditBoardModal: false,
  isAddBoardModal: false,
  isTaskModal: false,
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

    ADDBOARD: state => {
      return {
        ...state,
        isAddBoardModal: !state.isAddBoardModal,
      };
    },

    TASKMODAL: state => {
      return {
        ...state,
        isTaskModal: !state.isTaskModal,
      };
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
