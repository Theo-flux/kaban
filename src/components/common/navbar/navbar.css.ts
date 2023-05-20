import styled from 'styled-components';
import { StyledHeadingL } from '@/shared';
import { RiArrowDownSLine } from 'react-icons/ri';
import { device, transition } from '@/utils';

type TNavarrow = {
  openmobilenav: boolean;
};

export const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  background-color: var(--side);
  border-bottom: 1px solid var(--side-border);
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavLogoWrapper = styled.div`
  padding: 1.5rem 1rem;
  border-right: 1px solid var(--side-border);
`;

export const NavInner = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  justify-items: flex-start;
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
