import React from 'react';
import { BoardWrapper } from './board.css';
import { Column, NewColumn } from './column';
import { TTasksFromCollection } from '../../types';

interface IFilledBoardProps {
  boardData: TTasksFromCollection | undefined;
}

function FilledBoard({ boardData }: IFilledBoardProps) {
  return (
    <BoardWrapper>
      {boardData?.docs.map((datum, index) => {
        return <Column key={index} docs={datum} />;
      })}
    </BoardWrapper>
  );
}

export default FilledBoard;
