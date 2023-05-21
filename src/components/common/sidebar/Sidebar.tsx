import { useTheme } from 'next-themes';
import { useMediaQuery } from 'react-responsive';
import {
  SidebarContainer,
  SidebarLogo,
  Wrapper,
  SidebarInner,
  AllBoardText,
  SidebarBoards,
  SidebarBoard,
  CreateNewBoard,
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
  activeboard: string;
  handleSetActiveBoard: (val: string) => void;
  showsidebar: boolean;
  handleSetshowsidebar: () => void;
  openmobilenav: boolean;
  handleSetopenmobilenav: () => void;
}

interface IDesktopbar {
  theme: string | undefined;
  activeboard: string;
  handleSetActiveBoard: (val: string) => void;
  handleOnchangeTheme: () => void;
  showsidebar: boolean;
  handleSetshowsidebar: () => void;
}

interface IMobilebar {
  theme: string | undefined;
  activeboard: string;
  handleSetActiveBoard: (val: string) => void;
  handleOnchangeTheme: () => void;
  openmobilenav: boolean;
  handleSetopenmobilenav: () => void;
}

const boards = ['Platform Launch', 'Marketing Plan', 'Roadmap'];

const Desktop = ({
  theme,
  activeboard,
  handleSetActiveBoard,
  handleOnchangeTheme,
  showsidebar,
  handleSetshowsidebar,
}: IDesktopbar) => {
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
                <SidebarBoard
                  key={index}
                  activeboard={activeboard}
                  board={board}
                  onClick={() => handleSetActiveBoard(board)}
                >
                  <SidebarBoardIcon />
                  <SidebarBoardName name={board}>{board}</SidebarBoardName>
                </SidebarBoard>
              );
            })}
            <CreateNewBoard>
              <SidebarBoardIcon />
              <SidebarBoardName name={'new'}>
                <span>
                  <StyledCreateNew />
                </span>
                Create New Board
              </SidebarBoardName>
            </CreateNewBoard>
          </SidebarBoards>
        </SidebarInner>
        <SettingsContainer>
          <ThemeToggleContainer>
            <StyledSun />
            <Switch
              size="sm"
              color="violet"
              checked={theme == 'dark' ? true : false}
              onChange={() => handleOnchangeTheme()}
            />
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

const Mobile = ({
  theme,
  activeboard,
  handleSetActiveBoard,
  handleOnchangeTheme,
  openmobilenav,
  handleSetopenmobilenav,
}: IMobilebar) => {
  return (
    <MobileContainer
      openmobilenav={openmobilenav}
      onClick={() => handleSetopenmobilenav()}
    >
      <MobileInner openmobilenav={openmobilenav}>
        <AllBoardText>ALL BOARDS (0)</AllBoardText>
        <SidebarBoards>
          {boards.map((board, index) => {
            return (
              <SidebarBoard
                key={index}
                activeboard={activeboard}
                board={board}
                onClick={() => handleSetActiveBoard(board)}
              >
                <SidebarBoardIcon />
                <SidebarBoardName name={board}>{board}</SidebarBoardName>
              </SidebarBoard>
            );
          })}
          <CreateNewBoard>
            <SidebarBoardIcon />
            <SidebarBoardName name={'new'}>
              <span>
                <StyledCreateNew />
              </span>
              Create New Board
            </SidebarBoardName>
          </CreateNewBoard>
        </SidebarBoards>
        <MobileSettingsContainer>
          <ThemeToggleContainer>
            <StyledSun />
            <Switch
              size="sm"
              color="violet"
              checked={theme == 'dark' ? true : false}
              onChange={() => handleOnchangeTheme()}
            />
            <StyledMoon />
          </ThemeToggleContainer>
        </MobileSettingsContainer>
      </MobileInner>
    </MobileContainer>
  );
};

function Sidebar({
  activeboard,
  handleSetActiveBoard,
  showsidebar,
  handleSetshowsidebar,
  openmobilenav,
  handleSetopenmobilenav,
}: ISidebar) {
  const isFromTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const { theme, setTheme } = useTheme();

  const handleOnchangeTheme = () => {
    theme === 'light' || !theme ? setTheme('dark') : setTheme('light');
  };

  return isFromTablet ? (
    <Desktop
      theme={theme}
      activeboard={activeboard}
      handleSetActiveBoard={handleSetActiveBoard}
      handleOnchangeTheme={handleOnchangeTheme}
      showsidebar={showsidebar}
      handleSetshowsidebar={handleSetshowsidebar}
    />
  ) : (
    <Mobile
      theme={theme}
      activeboard={activeboard}
      handleSetActiveBoard={handleSetActiveBoard}
      handleOnchangeTheme={handleOnchangeTheme}
      openmobilenav={openmobilenav}
      handleSetopenmobilenav={handleSetopenmobilenav}
    />
  );
}

export default Sidebar;
