import React from 'react';
import Head from 'next/head';
import {
  DeleteBoardModal,
  AddNewTaskModal,
  AddNewBoardModal,
  EditBoardModal,
  TaskModal,
} from '../../components';
import { Frame } from '@/containers';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { modalActions } from '@/app/features/modals/modalSlice';
import { boardActions } from '@/app/features/board/boardSlice';

export default function Home() {
  const router = useRouter();
  const { boardid } = router.query;
  const { activeboard } = useAppSelector(state => state.board);
  const { SETACTIVEBOARD } = boardActions;

  const { isDeleteBoardModal, isEditBoardModal, isAddTaskModal, isTaskModal } =
    useAppSelector(state => state.modal);

  const { DELETEBOARD, EDITBOARD, ADDTASK, TASKMODAL } = modalActions;
  const dispatch = useAppDispatch();

  // function to handle open/close of deleteboardmodal
  const handleDispatchDeleteModal = () => {
    dispatch(DELETEBOARD());
  };

  // function to handle open/close of addnewtaskmodal
  const handleDispatchAddTaskModal = () => {
    dispatch(ADDTASK());
  };

  // function to handle open/close of editboardmodal
  const handleDispatchEditBoardModal = () => {
    dispatch(EDITBOARD());
  };

  // function to handle open/close of taskmodal
  const handleDispatchTaskModal = () => {
    dispatch(TASKMODAL());
  };

  // function to handle active board
  const handleSetActiveBoard = (val: string) => {
    dispatch(SETACTIVEBOARD(val));
    // setopenmobilenav(!openmobilenav);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Kanban - Task Manager</title>
        <meta
          name="description"
          content="Kanban is a task management app that helps organise your tasks, activities in a single place."
        />
      </Head>
      <main>
        <Frame>
          <DeleteBoardModal
            open={isDeleteBoardModal}
            activeboard={activeboard}
            handleSetActiveBoard={handleSetActiveBoard}
            handleDispatchDeleteModal={handleDispatchDeleteModal}
          />

          <AddNewTaskModal
            open={isAddTaskModal}
            handleDispatchAddTaskModal={handleDispatchAddTaskModal}
          />

          <EditBoardModal
            open={isEditBoardModal}
            activeboard={activeboard}
            handleDispatchEditBoardModal={handleDispatchEditBoardModal}
          />

          <TaskModal
            open={isTaskModal}
            handleDispatchTaskModal={handleDispatchTaskModal}
          />
        </Frame>
      </main>
    </React.Fragment>
  );
}
