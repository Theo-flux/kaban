import React, { useEffect } from 'react';
import { BoardWrapper } from './board.css';
import { Column, NewColumn } from './column';
import { TTasksFromCollection } from '../../types';
import { useAppDispatch } from '@/app/hooks';
import { allStatusActions } from '@/app/features/boards/allStatusSlice';

interface IFilledBoardProps {
  boardData: TTasksFromCollection | undefined;
}

function FilledBoard({ boardData }: IFilledBoardProps) {
  const allStatus = boardData?.docs.map((doc, index) => doc.name) || [];
  const { SETBOARDALLSTATUS } = allStatusActions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(SETBOARDALLSTATUS(allStatus));
  }, [allStatus]);

  console.log(allStatus);
  return (
    <BoardWrapper>
      {boardData?.docs.map((datum, index) => {
        return <Column key={index} docs={datum} />;
      })}
      <NewColumn />
    </BoardWrapper>
  );
}

export default FilledBoard;
