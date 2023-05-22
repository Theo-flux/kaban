import React from 'react';
import { ButtonContainer, ButtonText } from './elements.css';

interface IButton {
  leftIcon?: React.ReactNode;
  text: string;
}

export const ButtonIcon = ({ leftIcon, text }: IButton) => {
  return (
    <ButtonContainer>
      {leftIcon}
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};
