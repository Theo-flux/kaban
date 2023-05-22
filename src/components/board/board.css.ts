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

export const EmptyBoardWrapper = styled.div`
  padding: 0rem 1rem;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoardWrapper = styled.div``;

export const EmptyBoardText = styled(StyledHeadingL)`
  color: var(--regeant-gray);
  text-align: center;
  margin-bottom: 2rem;
`;
