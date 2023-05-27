import React from 'react';
import NewColumn from './NewColumn';
import { BoardContainer, BoardWrapper } from './board.css';

interface IBoardProps {
  showsidebar: boolean;
  activeboard: string;
}

function Board({ activeboard, showsidebar }: IBoardProps) {
  return (
    <BoardContainer showsidebar={showsidebar}>
      <BoardWrapper>
        <NewColumn />
      </BoardWrapper>
    </BoardContainer>
  );
}

export default Board;
