import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { modalActions } from '@/app/features/modals/modalSlice';
import { Navbar, Sidebar, ShowTag, Board } from '../../components';
import { FrameContainer, Aside } from './frame.css';
import { boardActions } from '@/app/features/board/boardSlice';
import { AddNewBoardModal } from '../../components';

function Frame({ children }: { children?: React.ReactNode }) {
  const { activeboard } = useAppSelector(state => state.board);
  const { SETACTIVEBOARD } = boardActions;
  const dispatch = useAppDispatch();

  const { isAddBoardModal } = useAppSelector(state => state.modal);

  const { ADDBOARD } = modalActions;

  let [showsidebar, setshowsidebar] = useState(true);
  let [openmobilenav, setopenmobilenav] = useState(false);

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
    dispatch(SETACTIVEBOARD(val));
  };

  // function to handle open/close of addboardmodal
  const handleDispatchAddBoardModal = () => {
    dispatch(ADDBOARD());
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
        />
        <Board activeboard={activeboard} showsidebar={showsidebar} />
        <AddNewBoardModal
          open={isAddBoardModal}
          handleDispatchAddBoardModal={handleDispatchAddBoardModal}
          handleSetActiveBoard={handleSetActiveBoard}
        />
        {children}
      </Aside>
    </FrameContainer>
  );
}

export default Frame;
