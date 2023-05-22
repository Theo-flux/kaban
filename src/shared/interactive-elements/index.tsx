import React from 'react';
import { ButtonContainer, ButtonText } from './elements.css';

interface IButtonIcon {
  leftIcon: React.ReactNode;
  text: string;
  hideTextOnMobile: boolean;
  btnType: 'primary' | 'secondary' | 'destructive';
  onClick?: React.MouseEventHandler;
}

interface IButton {
  text: string;
  btnType: 'primary' | 'secondary' | 'destructive';
  onClick?: React.MouseEventHandler;
}

export const ButtonIcon = ({
  btnType,
  leftIcon,
  text,
  hideTextOnMobile,
  onClick,
}: IButtonIcon) => {
  return (
    <ButtonContainer btnType={btnType} onClick={onClick}>
      {leftIcon}
      <ButtonText hideTextOnMobile={hideTextOnMobile}>{text}</ButtonText>
    </ButtonContainer>
  );
};

export const Button = ({ text, btnType, onClick }: IButton) => {
  return (
    <ButtonContainer btnType={btnType} onClick={onClick}>
      <ButtonText hideTextOnMobile={false}>{text}</ButtonText>
    </ButtonContainer>
  );
};
