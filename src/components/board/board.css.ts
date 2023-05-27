import styled from 'styled-components';
import { device, transition } from '@/utils';
import { StyledHeadingL, StyledHeadingXL } from '@/shared';

type TBoardcontainerProps = {
  showsidebar: boolean;
};

export const BoardContainer = styled.div<TBoardcontainerProps>`
  position: absolute;
  top: 60px;
  z-index: 1;
  right: 0px;
  width: 100%;
  height: 100vh;
  background-color: var(--body);
  ${transition}

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

export const EmptyBoardWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoardWrapper = styled.div`
  padding: 1rem;
`;

// Empty Board stylig
export const EmptyBoardText = styled(StyledHeadingL)`
  color: var(--regeant-gray);
  text-align: center;
  margin-bottom: 2rem;
`;

// Column Styling
export const StyledNewColumnText = styled(StyledHeadingXL)`
  color: var(--regeant-gray);
`;

export const NewColumnContainer = styled.div`
  cursor: pointer;
  width: 280px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--new-column);
  border-radius: 6px;
  ${transition}

  &:hover ${StyledNewColumnText} {
    color: var(--blue-marguerite);
  } 
`;
