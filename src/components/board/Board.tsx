import React from 'react';
import { NewColumn, Column } from './column';
import { BoardContainer, BoardWrapper } from './board.css';

interface IBoardProps {
  showsidebar: boolean;
  activeboard: string;
}

function Board({ activeboard, showsidebar }: IBoardProps) {
  return (
    <BoardContainer showsidebar={showsidebar}>
      <BoardWrapper>
        <Column />
        <NewColumn />
      </BoardWrapper>
    </BoardContainer>
  );
}

export default Board;
