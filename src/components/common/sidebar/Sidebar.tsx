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
  StyledCreateNew,
  // mobile styles
  MobileContainer,
  MobileInner,
  MobileSettingsContainer,
} from './sidebar.css';
import { Logo } from '../../../shared';
import { Switch } from '@mantine/core';

interface ISidebar {
  showsidebar: Boolean;
  handleSetshowsidebar: () => void;
}

const boards = ['Platform Launch', 'Marketing Plan', 'Roadmap'];

const Desktop = ({ showsidebar, handleSetshowsidebar }: ISidebar) => {
  return (
    <SidebarContainer showsidebar={showsidebar}>
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
                  <SidebarBoardName name={board}>{board}</SidebarBoardName>
                </SidebarBoard>
              );
            })}
            <SidebarBoard>
              <SidebarBoardIcon />
              <SidebarBoardName name={'new'}>
                <span>
                  <StyledCreateNew />
                </span>
                Create New Board
              </SidebarBoardName>
            </SidebarBoard>
          </SidebarBoards>
        </SidebarInner>
        <SettingsContainer>
          <ThemeToggleContainer>
            <StyledSun />
            <Switch size="xs" color="violet" />
            <StyledMoon />
          </ThemeToggleContainer>
          <HideSidebarContainer onClick={() => handleSetshowsidebar()}>
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
                <SidebarBoardName name={board}>{board}</SidebarBoardName>
              </SidebarBoard>
            );
          })}
          <SidebarBoard>
            <SidebarBoardIcon />
            <SidebarBoardName name={'new'}>
              <span>
                <StyledCreateNew />
              </span>
              Create New Board
            </SidebarBoardName>
          </SidebarBoard>
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

function Sidebar({ showsidebar, handleSetshowsidebar }: ISidebar) {
  const isFromTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return isFromTablet ? (
    <Desktop
      showsidebar={showsidebar}
      handleSetshowsidebar={handleSetshowsidebar}
    />
  ) : (
    <Mobile />
  );
}

export default Sidebar;
