import React from 'react';
import { ButtonContainer, ButtonText } from './elements.css';

interface IButton {
  leftIcon?: React.ReactNode;
  text: string;
  hideTextOnMobile: boolean;
}

export const ButtonIcon = ({ leftIcon, text, hideTextOnMobile }: IButton) => {
  return (
    <ButtonContainer>
      {leftIcon}
      <ButtonText hideTextOnMobile={hideTextOnMobile}>{text}</ButtonText>
    </ButtonContainer>
  );
};
