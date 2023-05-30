import React from 'react';
import { BoardWrapper } from './board.css';
import { Column, NewColumn } from './column';

function FilledBoard() {
  return (
    <BoardWrapper>
      <Column />
      <NewColumn />
    </BoardWrapper>
  );
}

export default FilledBoard;
