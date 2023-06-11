import { useEffect, useReducer, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { modalActions } from '@/app/features/modals/modalSlice';
import {
  Navbar,
  Sidebar,
  ShowTag,
  Board,
  DeleteBoardModal,
  AddNewTaskModal,
  AddNewBoardModal,
  EditBoardModal,
  TaskModal,
} from '../../components';
import { FrameContainer, Aside } from './frame.css';
import { usePersistState } from '@/hooks';

function Frame() {
  let { value: activeboard, updateValue: setActiveBoard } = usePersistState(
    'activeboard',
    'Roadmap'
  );

  const {
    isDeleteBoardModal,
    isEditBoardModal,
    isAddTaskModal,
    isAddBoardModal,
    isTaskModal,
  } = useAppSelector(state => state.modal);
  const { DELETEBOARD, EDITBOARD, ADDTASK, ADDBOARD, TASKMODAL } = modalActions;
  const dispatch = useAppDispatch();

  let [showsidebar, setshowsidebar] = useState(true);
  let [openmobilenav, setopenmobilenav] = useState(false);

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

  // function to handle open/close of addboardmodal
  const handleDispatchAddBoardModal = () => {
    dispatch(ADDBOARD());
  };

  // function to handle open/close of taskmodal
  const handleDispatchTaskModal = () => {
    dispatch(TASKMODAL());
  };

  // function to handle onclick hide/show sidebar
  const handleSetshowsidebar = () => {
    setshowsidebar(!showsidebar);
  };

  // function to handle open/close mobile nav
  const handleSetopenmobilenav = () => {
    setopenmobilenav(!openmobilenav);
  };

  // function to handle active board
  const handleSetActiveBoard = (val: string) => {
    setActiveBoard(val);
    setopenmobilenav(!openmobilenav);
  };

  return (
    <FrameContainer>
      <Sidebar
        activeboard={activeboard}
        handleSetActiveBoard={handleSetActiveBoard}
        showsidebar={showsidebar}
        handleSetshowsidebar={handleSetshowsidebar}
        openmobilenav={openmobilenav}
        handleSetopenmobilenav={handleSetopenmobilenav}
        handleDispatchAddBoardModal={handleDispatchAddBoardModal}
      />
      <ShowTag
        showsidebar={showsidebar}
        handleSetshowsidebar={handleSetshowsidebar}
      />

      <Aside showsidebar={showsidebar}>
        <Navbar
          activeboard={activeboard}
          openmobilenav={openmobilenav}
          showsidebar={showsidebar}
          handleSetopenmobilenav={handleSetopenmobilenav}
          handleDispatchDeleteModal={handleDispatchDeleteModal}
          handleDispatchAddTaskModal={handleDispatchAddTaskModal}
          handleDispatchEditBoardModal={handleDispatchEditBoardModal}
        />
        <Board activeboard={activeboard} showsidebar={showsidebar} />
      </Aside>

      {/* Modals */}
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
      <AddNewBoardModal
        open={isAddBoardModal}
        handleDispatchAddBoardModal={handleDispatchAddBoardModal}
        handleSetActiveBoard={handleSetActiveBoard}
      />
      <TaskModal
        open={isTaskModal}
        handleDispatchTaskModal={handleDispatchTaskModal}
      />
    </FrameContainer>
  );
}

export default Frame;
