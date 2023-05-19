import { useMediaQuery } from 'react-responsive';
import {
  SidebarContainer,
  SidebarLogo,
  Wrapper,
  SidebarInner,
  AllBoardText,
  SidebarBoards,
  SidebarBoard,
  SidebarBoardIcon,
  SidebarBoardName,
  SettingsContainer,
  ThemeToggleContainer,
  HideSidebarContainer,
  StyledEyeOff,
  HideSidebarText,
  StyledMoon,
  StyledSun,
  // mobile styles
  MobileContainer,
  MobileInner,
  MobileSettingsContainer
} from './sidebar.css';
import { Logo } from '../../../shared';
import { Switch } from '@mantine/core';

interface ISidebar {
  showSidebar: Boolean;
  handleSetShowSidebar: () => void;
}

const boards = ['Platform Launch', 'Marketing Plan', 'Roadmap'];

const Desktop = ({ showSidebar, handleSetShowSidebar }: ISidebar) => {
  return (
    <SidebarContainer showSidebar={showSidebar}>
      <SidebarLogo>
        <Logo />
      </SidebarLogo>
      <Wrapper>
        <SidebarInner>
          <AllBoardText>ALL BOARDS (0)</AllBoardText>
          <SidebarBoards>
            {boards.map((board, index) => {
              return (
                <SidebarBoard key={index}>
                  <SidebarBoardIcon />
                  <SidebarBoardName>{board}</SidebarBoardName>
                </SidebarBoard>
              );
            })}
          </SidebarBoards>
        </SidebarInner>
        <SettingsContainer>
          <ThemeToggleContainer>
            <StyledSun />
            <Switch size="xs" color="violet" />
            <StyledMoon />
          </ThemeToggleContainer>
          <HideSidebarContainer onClick={() => handleSetShowSidebar()}>
            <StyledEyeOff />
            <HideSidebarText>Hide Sidebar</HideSidebarText>
          </HideSidebarContainer>
        </SettingsContainer>
      </Wrapper>
    </SidebarContainer>
  );
};

const Mobile = () => {
  return (
    <MobileContainer>
      <MobileInner>
        <AllBoardText>ALL BOARDS (0)</AllBoardText>
        <SidebarBoards>
          {boards.map((board, index) => {
            return (
              <SidebarBoard key={index}>
                <SidebarBoardIcon />
                <SidebarBoardName>{board}</SidebarBoardName>
              </SidebarBoard>
            );
          })}
        </SidebarBoards>
        <MobileSettingsContainer>
          <ThemeToggleContainer>
            <StyledSun />
            <Switch size="xs" color="violet" />
            <StyledMoon />
          </ThemeToggleContainer>
        </MobileSettingsContainer>
      </MobileInner>
    </MobileContainer>
  );
};

function Sidebar({ showSidebar, handleSetShowSidebar }: ISidebar) {
  const isFromTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return isFromTablet ? (
    <Desktop
      showSidebar={showSidebar}
      handleSetShowSidebar={handleSetShowSidebar}
    />
  ) : (
    <Mobile />
  );
}

export default Sidebar;
