import React from 'react';
import { BoardContainer } from './board.css';

interface IBoardProps {
  showsidebar: boolean;
}

function Board({ showsidebar }: IBoardProps) {
  return <BoardContainer showsidebar={showsidebar}>Board</BoardContainer>;
}

export default Board;
