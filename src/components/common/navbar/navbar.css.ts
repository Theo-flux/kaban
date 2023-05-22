import styled from 'styled-components';
import { StyledHeadingL } from '@/shared';
import { RiArrowDownSLine } from 'react-icons/ri';
import { device, transition } from '@/utils';

type TNavarrow = {
  openmobilenav: boolean;
};

type TNavcontainerProps = {
  showsidebar: boolean;
};

export const NavContainer = styled.div<TNavcontainerProps>`
  position: fixed;
  z-index: 2;
  right: 0px;
  width: 100%;
  background-color: var(--side);
  border-bottom: 1px solid var(--side-border);

  @media ${device.md} {
    width: ${props => (props.showsidebar ? `70%` : `100%`)};
  }

  @media ${device.lg} {
    width: ${props => (props.showsidebar ? `80%` : `100%`)};
  }

  @media ${device.xl} {
    width: ${props => (props.showsidebar ? `85%` : `100%`)};
  }

  @media ${device.xxl} {
    width: ${props => (props.showsidebar ? `90%` : `100%`)};
  }
`;

export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavLogoWrapper = styled.div`
  padding: 1.5rem 1rem;
  border-right: 1px solid var(--side-border);
`;

export const NavInner = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavTitle = styled(StyledHeadingL)`
  color: var(--text);
`;

export const NavArrow = styled(RiArrowDownSLine)<TNavarrow>`
  display: block;
  margin-left: 0.5rem;
  transform: ${props => (props.openmobilenav ? 'rotate(180deg)' : 'rotate(0)')};
  ${transition}

  @media ${device.md} {
    display: none;
  }
`;

export const NavActiveBoard = styled.div`
  width: fit-content;
  display: flex;
  justify-items: space-between;
  align-items: center;
`;

export const NavOther = styled.div``;
