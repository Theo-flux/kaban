import React from 'react';
import { BoardContainer } from './board.css';
import FilledBoard from './FilledBoard';
import EmptyBoard from './EmptyBoard';
import { useGetTasksByCollectionQuery } from '@/app/features/api/apiSlice';

interface IBoardProps {
  showsidebar: boolean;
  activeboard: string;
}

function Board({ activeboard, showsidebar }: IBoardProps) {
  const { data, isLoading } = useGetTasksByCollectionQuery(activeboard);

  if (isLoading) {
    console.log('...loading');
  } else {
    console.log(data);
  }

  return (
    <BoardContainer showsidebar={showsidebar}>
      {/* <FilledBoard /> */}
      <EmptyBoard />
    </BoardContainer>
  );
}

export default Board;
