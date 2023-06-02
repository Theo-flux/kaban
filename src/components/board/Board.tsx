import React from 'react';
import { BoardContainer } from './board.css';
import FilledBoard from './FilledBoard';
import EmptyBoard from './EmptyBoard';
import { useGetTasksByCollectionQuery } from '@/app/features/api/apiSlice';
import { StyledLoader } from '@/shared';

interface IBoardProps {
  showsidebar: boolean;
  activeboard: string;
}

function Board({ activeboard, showsidebar }: IBoardProps) {
  const { data, isLoading } = useGetTasksByCollectionQuery(activeboard, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <BoardContainer showsidebar={showsidebar}>
      {isLoading ? (
        <StyledLoader />
      ) : data?.docs.length != 0 ? (
        <FilledBoard boardData={data} />
      ) : (
        <EmptyBoard />
      )}
    </BoardContainer>
  );
}

export default Board;
