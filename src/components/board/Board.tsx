import React from 'react';
import { BoardContainer, BoardWrapper } from './board.css';

interface IBoardProps {
  showsidebar: boolean;
}

function Board({ showsidebar }: IBoardProps) {
  return (
    <BoardContainer showsidebar={showsidebar}>
      <BoardWrapper>Board wrapper</BoardWrapper>
    </BoardContainer>
  );
}

export default Board;
