import { useState } from 'react';
import { Navbar, Sidebar, ShowTag } from '../../components';
import { FrameContainer, Aside } from './frame.css';

function Frame() {
  let [showSidebar, setShowSidebar] = useState(true);

  const handleSetShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <FrameContainer>
      <Sidebar
        showSidebar={showSidebar}
        handleSetShowSidebar={handleSetShowSidebar}
      />
      <Aside>
        <Navbar showSidebar={showSidebar} />
      </Aside>
      <ShowTag
        showSidebar={showSidebar}
        handleSetShowSidebar={handleSetShowSidebar}
      />
    </FrameContainer>
  );
}

export default Frame;
