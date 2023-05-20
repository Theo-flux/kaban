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

interface IDesktopbar {
  theme: string | undefined;
  handleOnchangeTheme: () => void;
  showsidebar: Boolean;
  handleSetshowsidebar: () => void;
}

interface IMobilebar {
  theme: string | undefined;
  handleOnchangeTheme: () => void;
}

const boards = ['Platform Launch', 'Marketing Plan', 'Roadmap'];

const Desktop = ({
  theme,
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
            <Switch
              size="xs"
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

const Mobile = ({ theme, handleOnchangeTheme }: IMobilebar) => {
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
            <Switch
              size="xs"
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

function Sidebar({ showsidebar, handleSetshowsidebar }: ISidebar) {
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
      handleOnchangeTheme={handleOnchangeTheme}
      showsidebar={showsidebar}
      handleSetshowsidebar={handleSetshowsidebar}
    />
  ) : (
    <Mobile theme={theme} handleOnchangeTheme={handleOnchangeTheme} />
  );
}

export default Sidebar;
