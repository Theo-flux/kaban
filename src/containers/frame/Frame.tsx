import { useState } from 'react';
import {
  Navbar,
  Sidebar,
  ShowTag,
  Board,
  DeleteBoardModal,
} from '../../components';
import { FrameContainer, Aside } from './frame.css';
import { usePersistState } from '@/hooks';

function Frame() {
  let { value: activeboard, updateValue: setActiveBoard } = usePersistState(
    'activeboard',
    'Platform Launch'
  );
  let [showsidebar, setshowsidebar] = useState(true);
  let [openmobilenav, setopenmobilenav] = useState(false);
  const [openDeleteModal, setOpenDeletemodal] = useState(false);

  // function to handle open/close of deletemodal
  const handleSetOpendDeleteModal = () => {
    setOpenDeletemodal(!openDeleteModal);
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
          openDeleteModal={openDeleteModal}
          activeboard={activeboard}
          openmobilenav={openmobilenav}
          showsidebar={showsidebar}
          handleSetopenmobilenav={handleSetopenmobilenav}
          handleSetOpendDeleteModal={handleSetOpendDeleteModal}
        />
        <Board showsidebar={showsidebar} />
      </Aside>

      {/* Modals */}
      <DeleteBoardModal
        open={openDeleteModal}
        activeboard={activeboard}
        handleSetOpendDeleteModal={handleSetOpendDeleteModal}
      />
    </FrameContainer>
  );
}

export default Frame;
