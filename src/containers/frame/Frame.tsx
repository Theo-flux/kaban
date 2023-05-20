import { useState } from 'react';
import { Navbar, Sidebar, ShowTag } from '../../components';
import { FrameContainer, Aside } from './frame.css';

function Frame() {
  let [showsidebar, setshowsidebar] = useState(true);
  let [openmobilenav, setopenmobilenav] = useState(false);

  const handleSetshowsidebar = () => {
    setshowsidebar(!showsidebar);
  };

  const handleSetopenmobilenav = () => {
    setopenmobilenav(!openmobilenav);
  };

  return (
    <FrameContainer>
      <Sidebar
        showsidebar={showsidebar}
        handleSetshowsidebar={handleSetshowsidebar}
        openmobilenav={openmobilenav}
        handleSetopenmobilenav={handleSetopenmobilenav}
      />
      <Aside>
        <Navbar
          openmobilenav={openmobilenav}
          showsidebar={showsidebar}
          handleSetopenmobilenav={handleSetopenmobilenav}
        />
      </Aside>
      <ShowTag
        showsidebar={showsidebar}
        handleSetshowsidebar={handleSetshowsidebar}
      />
    </FrameContainer>
  );
}

export default Frame;
