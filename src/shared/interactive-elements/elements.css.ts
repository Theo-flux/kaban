import styled from 'styled-components';
import { StyledHeadingMD } from '../typography';
import { device, transition } from '@/utils';

type TButtonContainer = {
  btnType: 'primary' | 'secondary' | 'destructive';
};

type TButtonText = {
  hideTextOnMobile: boolean;
};

type TButtonTextLoader = {
  isLoading: boolean;
};

export const ButtonText = styled(StyledHeadingMD)<TButtonText>`
  text-align: center;
  display: ${props => (props.hideTextOnMobile ? 'none' : 'block')};
  ${props => props.hideTextOnMobile && `margin-left: 0.35rem;`}

  @media ${device.md} {
    display: block;
  }
`;

export const ButtonTextLoader = styled(ButtonText)<TButtonTextLoader>`
  margin-left: ${props => (props.isLoading ? '0.5rem' : '0rem')};
`;

export const ButtonContainer = styled.button<TButtonContainer>`
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  padding: 0.75rem 1rem;
  background-color: ${props =>
    props.btnType === 'primary'
      ? 'var(--primary-btn)'
      : props.btnType === 'secondary'
      ? 'var(--secondary-btn)'
      : 'var(--destructive-btn)'};

  ${ButtonText} {
    color: ${props =>
      props.btnType === 'primary'
        ? 'var(--white)'
        : props.btnType === 'secondary'
        ? 'var(--blue-marguerite)'
        : 'var(--white)'};
    ${transition}
  }

  &:hover {
    background-color: ${props =>
      props.btnType === 'primary'
        ? 'var(--primary-btn-hover)'
        : props.btnType === 'secondary'
        ? 'var(--secondary-btn-hover)'
        : 'var(--destructive-btn-hover)'};
  }

  &:disabled {
    mix-blend-mode: normal;
    opacity: 0.25;
    pointer-events: none;
  }
`;
