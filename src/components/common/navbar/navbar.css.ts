import styled from 'styled-components';
import { StyledBodyL, StyledHeadingL } from '@/shared';
import { RiArrowDownSLine } from 'react-icons/ri';
import { device, transition } from '@/utils';
import { FiMoreVertical } from 'react-icons/fi';

type TNavarrow = {
  openmobilenav: boolean;
};

type TNavcontainerProps = {
  showsidebar: boolean;
};

type TMoreCard = {
  openmore: boolean;
};

export const NavContainer = styled.div<TNavcontainerProps>`
  position: fixed;
  z-index: 2;
  right: 0px;
  width: 100%;
  background-color: var(--side);
  border-bottom: 1px solid var(--side-border);

  @media ${device.md} {
    width: ${props => (props.showsidebar ? `calc(100% - 300px)` : `100%`)};
  }

  @media ${device.lg} {
    width: ${props => (props.showsidebar ? `calc(100% - 270px)` : `100%`)};
  }

  @media ${device.xl} {
    width: ${props => (props.showsidebar ? `calc(100% - 250px)` : `100%`)};
  }
`;

export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavLogoWrapper = styled.div`
  cursor: pointer;
  padding: 0.75rem;
  border-right: 1px solid var(--side-border);

  @media ${device.md} {
    padding: 1rem 0.2rem;
  }
`;

export const NavInner = styled.div`
  width: 100%;
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavTitle = styled(StyledHeadingL)`
  color: var(--text);
`;

export const NavArrowIcon = styled(RiArrowDownSLine)<TNavarrow>`
  display: block;
  margin-left: 0.5rem;
  transform: ${props => (props.openmobilenav ? 'rotate(180deg)' : 'rotate(0)')};
  ${transition}

  @media ${device.md} {
    display: none;
  }
`;

export const NavActiveBoard = styled.div`
  cursor: pointer;
  width: fit-content;
  display: flex;
  justify-items: space-between;
  align-items: center;
`;

export const NavOther = styled.div`
  width: fit-content;
  display: flex;
  justify-items: space-between;
  align-items: center;
`;

export const StyledMoreIcon = styled(FiMoreVertical)`
  cursor: pointer;
  margin-left: 0.5rem;
`;

export const MoreCard = styled.div<TMoreCard>`
  position: absolute;
  top: 60px;
  right: 20px;
  width: 190px;
  padding: 0.75rem 1rem;
  background-color: var(--body);
  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
  border-radius: 8px;
  transform: ${props =>
    props.openmore ? 'translateY(0px)' : 'translateY(-20px)'};
  visibility: ${props => (props.openmore ? 'visible' : 'hidden')};
  opacity: ${props => (props.openmore ? '1' : '0')};
  ${transition}
`;

export const EditText = styled(StyledBodyL)`
  color: var(--text);
  cursor: pointer;
  margin-bottom: 0.5rem;
`;

export const DeleteText = styled(StyledBodyL)`
  cursor: pointer;
  color: var(--mandy);
`;
