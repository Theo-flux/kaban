import { useReducer, useState } from 'react';
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

function Frame() {
  let { value: activeboard, updateValue: setActiveBoard } = usePersistState(
    'activeboard',
    'Platform Launch'
  );
  function spreadThem<T extends object>(t: T, s: T): T {
    return { ...(t as object), ...(s as object) } as T;
  }
  let [showsidebar, setshowsidebar] = useState(true);
  let [openmobilenav, setopenmobilenav] = useState(false);
  // const [openDeleteModal, setOpenDeletemodal] = useState(false);

  type TModalState = {
    deleteBoard: boolean;
    addTask: boolean;
    editBoard: boolean;
  };

  type TModalAction = {
    type: string;
  };

  const modalInitialState = {
    deleteBoard: false,
    addTask: false,
    editBoard: false,
  };

  const modalReducer = (state: TModalState, action: TModalAction) => {
    switch (action.type) {
      case 'deleteBoard': {
        return {
          ...state,
          deleteBoard: !state.deleteBoard,
        };
      }
      case 'editBoard': {
        return {
          ...state,
          editBoard: !state.editBoard,
        };
      }
      case 'addTask': {
        return {
          ...state,
          addTask: !state.addTask,
        };
      }

      default:
        return state;
    }
  };

  const [openmodal, updateModal] = useReducer(modalReducer, modalInitialState);

  // function to handle open/close of deleteboardmodal
  const handleDispatchDeleteModal = () => {
    updateModal({ type: 'deleteBoard' });
  };

  // function to handle open/close of addnewtaskmodal
  const handleDispatchAddTaskModal = () => {
    updateModal({ type: 'addTask' });
  };

  // function to handle open/close of editboardmodal
  const handleDispatchEditBoardModal = () => {
    updateModal({ type: 'editBoard' });
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
        open={openmodal.deleteBoard}
        activeboard={activeboard}
        handleDispatchDeleteModal={handleDispatchDeleteModal}
      />

      <AddNewTaskModal
        open={openmodal.addTask}
        handleDispatchAddTaskModal={handleDispatchAddTaskModal}
      />

      <EditBoardModal
        open={openmodal.editBoard}
        handleDispatchEditBoardModal={handleDispatchEditBoardModal}
      />
    </FrameContainer>
  );
}

export default Frame;
