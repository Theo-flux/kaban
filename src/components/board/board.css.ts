import styled from 'styled-components';
import { device, transition } from '@/utils';
import { StyledHeadingL } from '@/shared';

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
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  gap: 2rem;
  flex-wrap: nowrap;
  overflow-x: scroll;
`;

// Empty Board stylig
export const EmptyBoardText = styled(StyledHeadingL)`
  color: var(--regeant-gray);
  text-align: center;
  margin-bottom: 2rem;
`;
