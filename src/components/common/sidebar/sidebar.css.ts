import styled from 'styled-components';
import { StyledBodyMD, StyledHeadingMD } from '@/shared';
import { device, transition } from '@/utils';
import { TbLayoutBoardSplit } from 'react-icons/tb';
import { RiSunFill, RiEyeOffLine, RiAddFill } from 'react-icons/ri';
import { BsFillMoonStarsFill } from 'react-icons/bs';

type TsidebarContainer = {
  showsidebar: boolean;
};

type TSidebarBoardName = {
  name: string;
};

type TMobile = {
  openmobilenav: boolean;
};

type TSideBoardProps = {
  activeboard: string;
  board: string;
};

export const SidebarContainer = styled.div<TsidebarContainer>`
  position: fixed;
  left: 0px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: ${props => (props.showsidebar ? `35%` : `0px`)};
  transform: ${props => (props.showsidebar ? `scale(1)` : `scale(0)`)};
  transform-origin: left;
  height: 100vh;
  border-right: 1px solid var(--side-border);
  background-color: var(--side);
  ${transition}

  @media ${device.md} {
    width: ${props => (props.showsidebar ? `30%` : `0px`)};
  }

  @media ${device.lg} {
    width: ${props => (props.showsidebar ? `20%` : `0px`)};
  }

  @media ${device.xl} {
    width: ${props => (props.showsidebar ? `15%` : `0px`)};
  }

  @media ${device.xxl} {
    width: ${props => (props.showsidebar ? `10%` : `0px`)};
  }
`;

export const SidebarLogo = styled.div`
  /* border: 1px solid magenta; */
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  /* border: 1px solid magenta; */
`;

export const SidebarInner = styled.div`
  /* border: 1px solid magenta; */
  height: 85%;
  width: 100%;
`;

export const AllBoardText = styled(StyledBodyMD)`
  padding: 1.1rem;
  letter-spacing: 2.4px;
  color: var(--regeant-gray);
`;

export const SidebarBoards = styled.div``;

export const SidebarBoardIcon = styled(TbLayoutBoardSplit)`
  color: var(--regeant-gray);
  width: 16px;
  height: 16px;
`;

export const SidebarBoardName = styled(StyledHeadingMD)<TSidebarBoardName>`
  margin-left: 1rem;
  color: ${props =>
    props.name === 'new' ? `var(--blue-marguerite)` : `var(--regeant-gray)`};
`;

export const SidebarBoard = styled.div<TSideBoardProps>`
  width: 85%;
  padding: 1rem;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: ${props =>
    props.activeboard == props.board
      ? 'var(--blue-marguerite)'
      : 'transparent'};
  ${transition}

  &:hover {
    background-color: ${props =>
      props.activeboard == props.board
        ? 'var(--blue-marguerite)'
        : 'var(--sidebar-hover-el)'};
  }

  &:hover ${SidebarBoardName}, &:hover ${SidebarBoardIcon} {
    color: ${props =>
      props.activeboard == props.board
        ? 'var(--white)'
        : 'var(--blue-marguerite)'};
  }

  ${SidebarBoardName}, ${SidebarBoardIcon} {
    color: ${props =>
      props.activeboard == props.board
        ? 'var(--white)'
        : 'var(--regeant-gray)'};

    ${transition}
  }
`;

export const CreateNewBoard = styled.div`
  width: 85%;
  padding: 1rem;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  ${transition}

  &:hover {
    background-color: #635fc710;
    color: var(--blue-marguerite);
  }

  &:hover ${SidebarBoardName}, &:hover ${SidebarBoardIcon} {
    color: var(--blue-marguerite);
  }
`;

export const SettingsContainer = styled.div`
  width: 85%;
`;

export const ThemeToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: var(--body);
  padding: 0.75rem;
  margin-left: 0.75rem;
  margin-bottom: 0.75rem;

  & div {
    cursor: pointer;
  }
`;

export const StyledSun = styled(RiSunFill)`
  margin-right: 1rem;
  color: var(--regeant-gray);
`;

export const StyledMoon = styled(BsFillMoonStarsFill)`
  margin-left: 1rem;
  color: var(--regeant-gray);
`;

export const HideSidebarText = styled(StyledHeadingMD)`
  color: var(--regeant-gray);
`;

export const StyledEyeOff = styled(RiEyeOffLine)`
  margin-right: 1rem;
  color: var(--regeant-gray);
`;

export const HideSidebarContainer = styled.div`
  cursor: pointer;
  /* width: 85%; */
  padding: 1rem;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  ${transition}

  &:hover {
    background-color: var(--sidebar-hover-el);
  }

  &:hover ${HideSidebarText}, &:hover ${StyledEyeOff} {
    color: var(--blue-marguerite);
  }

  ${HideSidebarText}, ${StyledEyeOff} {
    color: var(--regeant-gray);

    ${transition}
  }
`;

// Mobile styles
export const MobileContainer = styled.div<TMobile>`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  visibility: ${props => (props.openmobilenav ? 'visible' : 'hidden')};
  transform: ${props =>
    props.openmobilenav ? 'translateY(0)' : 'translateY(24px)'};
  opacity: ${props => (props.openmobilenav ? '1' : '0')};
  ${transition}
`;

export const MobileInner = styled.div<TMobile>`
  width: 80%;
  max-width: 270px;
  margin: 8rem auto;
  border-radius: 6px;
  background-color: var(--side);
  visibility: ${props => (props.openmobilenav ? 'visible' : 'hidden')};
  transform: ${props =>
    props.openmobilenav ? 'translateY(0)' : 'translateY(24px)'};
  opacity: ${props => (props.openmobilenav ? '1' : '0')};
  ${transition}
  transition-delay: 350ms;
`;

export const MobileSettingsContainer = styled.div`
  padding: 0.5rem 1.1rem;
  width: 100%;
`;

export const StyledCreateNew = styled(RiAddFill)`
  color: var(--blue-marguerite);
`;
