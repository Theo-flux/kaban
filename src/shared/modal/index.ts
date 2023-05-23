import styled from 'styled-components';
import { transition } from '@/utils';
import { StyledHeadingL } from '../typography';

type TModalContainerProps = {
  open: boolean;
};

type TModalCardProps = {
  open: boolean;
};

type TModalTitle = {
  color?: string;
};

export const ModalContainer = styled.div<TModalContainerProps>`
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  transform: ${props => (props.open ? 'translateY(0)' : 'translateY(24px)')};
  ${transition}
`;

export const ModalBackdrop = styled.div<TModalContainerProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  transform: ${props => (props.open ? 'translateY(0)' : 'translateY(24px)')};
  opacity: ${props => (props.open ? '1' : '0')};
  ${transition}
`;

export const ModalCard = styled.div<TModalCardProps>`
  width: 80%;
  z-index: 6;
  max-width: 480px;
  border-radius: 6px;
  background-color: var(--side);
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  transform: ${props => (props.open ? 'translateY(0)' : 'translateY(24px)')};
  opacity: ${props => (props.open ? '1' : '0')};
  ${transition}
`;

export const ModalWrapper = styled.div`
  padding: 2rem;
`;

export const ModalTitle = styled(StyledHeadingL)<TModalTitle>`
  color: ${props => (props.color ? `${props.color}` : `var(--text)`)};
  margin-bottom: 1rem;
`;
