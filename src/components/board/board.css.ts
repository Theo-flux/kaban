import styled from 'styled-components';
import { device, transition } from '@/utils';

type TBoardcontainerProps = {
  showsidebar: boolean;
};

export const BoardContainer = styled.div<TBoardcontainerProps>`
  position: absolute;
  top: 80px;
  z-index: 1;
  right: 0px;
  width: 100%;
  height: 300vh;
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
