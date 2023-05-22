import styled from 'styled-components';
import { transition } from '@/utils';

type TModalContainerProps = {
  open: boolean;
};

export const ModalContainer = styled.div<TModalContainerProps>`
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--backdrop-color);
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  transform: ${props => (props.open ? 'translateY(0)' : 'translateY(24px)')};
  opacity: ${props => (props.open ? '1' : '0')};
  ${transition}
`;

export const ModalWrapper = styled.div`
  padding: 1.5rem 1rem;
`;
