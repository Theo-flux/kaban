import React from 'react';
import {
  BoardContainer,
  EmptyBoardWrapper,
  BoardWrapper,
  EmptyBoardText,
} from './board.css';
import { ButtonIcon, StyledPlusIcon } from '@/shared';

function EmptyBoard() {
  return (
    <EmptyBoardWrapper>
      <EmptyBoardText>
        This board is empty. Create a new column to get started.
      </EmptyBoardText>
      <ButtonIcon
        btnType="primary"
        leftIcon={<StyledPlusIcon />}
        text="Add New Column"
        hideTextOnMobile={false}
      />
    </EmptyBoardWrapper>
  );
}

export default EmptyBoard;
