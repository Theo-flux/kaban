import styled from 'styled-components';
import { StyledBodyMD, StyledHeadingMD } from '@/shared';
import { device, transition } from '@/utils';
import { TbLayoutBoardSplit } from 'react-icons/tb';
import { RiSunFill, RiEyeOffLine, RiAddFill } from 'react-icons/ri';
import { BsFillMoonStarsFill } from 'react-icons/bs';

type TsidebarContainer = {
  showsidebar: Boolean;
};

type TCreateNewBoard = {
  name: String;
};

export const SidebarContainer = styled.div<TsidebarContainer>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: ${props => (props.showsidebar ? `35%` : `0px`)};
  transform: ${props => (props.showsidebar ? `scaleX(1)` : `scaleX(0)`)};
  transform-origin: left;
  height: 100vh;
  border-right: 1px solid var(--side-border);
  background-color: var(--side);
  ${transition}

  @media ${device.md} {
    width: ${props => (props.showsidebar ? `40%` : `0px`)};
  }

  @media ${device.lg} {
    width: ${props => (props.showsidebar ? `25%` : `0px`)};
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
  height: 90%;
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

export const SidebarBoardName = styled(StyledHeadingMD)<TCreateNewBoard>`
  margin-left: 1rem;
  color: ${props =>
    props.name === 'new' ? `var(--blue-marguerite)` : `var(--regeant-gray)`};
`;

export const SidebarBoard = styled.div`
  width: 85%;
  padding: 1rem;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  /* background-color: var(--blue-marguerite); */
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
  padding: 1.1rem;
  width: 100%;
`;

export const ThemeToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: var(--body);
  padding: 0.75rem;
  margin-bottom: 1rem;
`;

export const StyledSun = styled(RiSunFill)`
  margin-right: 1rem;
  color: var(--regeant-gray);
`;

export const StyledMoon = styled(BsFillMoonStarsFill)`
  margin-left: 1rem;
  color: var(--regeant-gray);
`;

export const HideSidebarContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const HideSidebarText = styled(StyledHeadingMD)`
  color: var(--regeant-gray);
`;

export const StyledEyeOff = styled(RiEyeOffLine)`
  margin-right: 1rem;
  color: var(--regeant-gray);
`;

// Mobile styles
export const MobileContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  /* background-color: var(--backdrop-color); */
`;

export const MobileInner = styled.div`
  background-color: var(--white);
  width: 80%;
  max-width: 270px;
  margin: 8rem auto;
  border-radius: 6px;
    background-color: var(--side);
`;

export const MobileSettingsContainer = styled.div`
  padding: 0.5rem 1.1rem;
  width: 100%;
`;

export const StyledCreateNew = styled(RiAddFill)`
  color: var(--blue-marguerite);
`;
