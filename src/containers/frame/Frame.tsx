import { useReducer, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { modalActions } from '@/app/features/modals/modalSlice';
import {
  Navbar,
  Sidebar,
  ShowTag,
  Board,
  DeleteBoardModal,
  AddNewTaskModal,
  EditBoardModal,
} from '../../components';
import { FrameContainer, Aside } from './frame.css';
import { usePersistState } from '@/hooks';

interface ICollections {
  boardCollections: { name: String; collections: Array<String> };
}

function Frame() {
  let { value: activeboard, updateValue: setActiveBoard } = usePersistState(
    'activeboard',
    'Platform Launch'
  );

  const { isDeleteBoardModal, isEditBoardModal, isAddTaskModal } =
    useAppSelector(state => state.modal);
  const { DELETEBOARD, EDITBOARD, ADDTASK } = modalActions;
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
        <Board showsidebar={showsidebar} />
      </Aside>

      {/* Modals */}
      <DeleteBoardModal
        open={isDeleteBoardModal}
        activeboard={activeboard}
        handleDispatchDeleteModal={handleDispatchDeleteModal}
      />

      <AddNewTaskModal
        open={isAddTaskModal}
        handleDispatchAddTaskModal={handleDispatchAddTaskModal}
      />

      <EditBoardModal
        open={isEditBoardModal}
        handleDispatchEditBoardModal={handleDispatchEditBoardModal}
      />
    </FrameContainer>
  );
}

export default Frame;
