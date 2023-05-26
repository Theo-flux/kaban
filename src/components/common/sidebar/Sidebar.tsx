import { useEffect, useState } from 'react';
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
import { Logo, StyledLoader } from '../../../shared';
import { Switch } from '@mantine/core';
import { useGetAllBoardsQuery } from '@/app/features/api/apiSlice';

interface ISidebar {
  activeboard: string;
  handleSetActiveBoard: (val: string) => void;
  showsidebar: boolean;
  handleSetshowsidebar: () => void;
  openmobilenav: boolean;
  handleSetopenmobilenav: () => void;
  handleDispatchAddBoardModal: () => void;
}

interface IDesktopbar {
  collections: Array<string> | undefined;
  boardNumber: number;
  isLoading: boolean;
  theme: string | undefined;
  activeboard: string;
  handleSetActiveBoard: (val: string) => void;
  handleOnchangeTheme: () => void;
  showsidebar: boolean;
  handleSetshowsidebar: () => void;
  handleDispatchAddBoardModal: () => void;
}

interface IMobilebar {
  collections: Array<string> | undefined;
  boardNumber: number;
  isLoading: boolean;
  theme: string | undefined;
  activeboard: string;
  handleSetActiveBoard: (val: string) => void;
  handleOnchangeTheme: () => void;
  openmobilenav: boolean;
  handleSetopenmobilenav: () => void;
  handleDispatchAddBoardModal: () => void;
}

// const boards = ['Platform Launch', 'Marketing Plan', 'Roadmap'];

const Desktop = ({
  theme,
  boardNumber,
  isLoading,
  collections,
  activeboard,
  handleSetActiveBoard,
  handleOnchangeTheme,
  showsidebar,
  handleSetshowsidebar,
  handleDispatchAddBoardModal,
}: IDesktopbar) => {
  return (
    <SidebarContainer showsidebar={showsidebar}>
      <SidebarLogo>
        <Logo />
      </SidebarLogo>
      <Wrapper>
        <SidebarInner>
          <AllBoardText>ALL BOARDS ({boardNumber})</AllBoardText>
          <SidebarBoards>
            {isLoading ? (
              <StyledLoader />
            ) : (
              collections?.map((board, index) => {
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
              })
            )}
            <CreateNewBoard onClick={() => handleDispatchAddBoardModal()}>
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
  boardNumber,
  isLoading,
  collections,
  activeboard,
  handleSetActiveBoard,
  handleOnchangeTheme,
  openmobilenav,
  handleSetopenmobilenav,
  handleDispatchAddBoardModal,
}: IMobilebar) => {
  return (
    <MobileContainer
      openmobilenav={openmobilenav}
      onClick={() => handleSetopenmobilenav()}
    >
      <MobileInner openmobilenav={openmobilenav}>
        <AllBoardText>ALL BOARDS ({boardNumber})</AllBoardText>
        <SidebarBoards>
          {collections?.map((board, index) => {
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
          <CreateNewBoard onClick={() => handleDispatchAddBoardModal()}>
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
  handleDispatchAddBoardModal,
}: ISidebar) {
  const { data, isLoading } = useGetAllBoardsQuery();
  const [boardNumber, setBoardNumber] = useState(0);

  const isFromTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const { theme, setTheme } = useTheme();

  const handleOnchangeTheme = () => {
    theme === 'light' || !theme ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    data && setBoardNumber(data?.collections?.length);
  }, [data]);

  return isFromTablet ? (
    <Desktop
      collections={data?.collections}
      isLoading={isLoading}
      boardNumber={boardNumber}
      theme={theme}
      activeboard={activeboard}
      handleSetActiveBoard={handleSetActiveBoard}
      handleOnchangeTheme={handleOnchangeTheme}
      showsidebar={showsidebar}
      handleSetshowsidebar={handleSetshowsidebar}
      handleDispatchAddBoardModal={handleDispatchAddBoardModal}
    />
  ) : (
    <Mobile
      collections={data?.collections}
      isLoading={isLoading}
      boardNumber={boardNumber}
      theme={theme}
      activeboard={activeboard}
      handleSetActiveBoard={handleSetActiveBoard}
      handleOnchangeTheme={handleOnchangeTheme}
      openmobilenav={openmobilenav}
      handleSetopenmobilenav={handleSetopenmobilenav}
      handleDispatchAddBoardModal={handleDispatchAddBoardModal}
    />
  );
}

export default Sidebar;
