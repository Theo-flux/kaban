import { useState } from 'react';
import { Navbar, Sidebar, ShowTag } from '../../components';
import { FrameContainer, Aside } from './frame.css';

function Frame() {
  let [showsidebar, setshowsidebar] = useState(true);

  const handleSetshowsidebar = () => {
    setshowsidebar(!showsidebar);
  };

  return (
    <FrameContainer>
      <Sidebar
        showsidebar={showsidebar}
        handleSetshowsidebar={handleSetshowsidebar}
      />
      <Aside>
        <Navbar showsidebar={showsidebar} />
      </Aside>
      <ShowTag
        showsidebar={showsidebar}
        handleSetshowsidebar={handleSetshowsidebar}
      />
    </FrameContainer>
  );
}

export default Frame;
