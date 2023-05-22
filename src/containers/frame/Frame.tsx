import { useState } from 'react';
import { Navbar, Sidebar, ShowTag, Board } from '../../components';
import { FrameContainer, Aside } from './frame.css';
import { usePersistState } from '@/hooks';

function Frame() {
  let { value: activeboard, updateValue: setActiveBoard } = usePersistState(
    'activeboard',
    'Platform Launch'
  );
  let [showsidebar, setshowsidebar] = useState(true);
  let [openmobilenav, setopenmobilenav] = useState(false);

  const handleSetshowsidebar = () => {
    setshowsidebar(!showsidebar);
  };

  const handleSetopenmobilenav = () => {
    setopenmobilenav(!openmobilenav);
  };

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
        />
        <Board showsidebar={showsidebar} />
      </Aside>
    </FrameContainer>
  );
}

export default Frame;
