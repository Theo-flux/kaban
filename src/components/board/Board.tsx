import React from 'react';
import {
  BoardContainer,
  EmptyBoardWrapper,
  BoardWrapper,
  EmptyBoardText,
} from './board.css';
import { ButtonIcon, StyledPlusIcon } from '@/shared';

interface IBoardProps {
  showsidebar: boolean;
}

function Board({ showsidebar }: IBoardProps) {
  return (
    <BoardContainer showsidebar={showsidebar}>
      <EmptyBoardWrapper>
        <EmptyBoardText>
          This board is empty. Create a new column to get started.
        </EmptyBoardText>
        <ButtonIcon
          leftIcon={<StyledPlusIcon />}
          text="Add New Column"
          hideTextOnMobile={false}
        />
      </EmptyBoardWrapper>
      {/* <BoardWrapper>Board wrapper</BoardWrapper> */}
    </BoardContainer>
  );
}

export default Board;
