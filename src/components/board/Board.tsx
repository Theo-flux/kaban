import React from 'react';
import { BoardContainer } from './board.css';
import FilledBoard from './FilledBoard';
import EmptyBoard from './EmptyBoard';
import { useGetTasksByCollectionQuery } from '@/app/features/api/apiSlice';
import { StyledLoader } from '@/shared';
import Home from './Home';

interface IBoardProps {
  showsidebar: boolean;
  activeboard: string;
}

function Board({ activeboard, showsidebar }: IBoardProps) {
  const { data, isFetching } = useGetTasksByCollectionQuery(activeboard, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <BoardContainer showsidebar={showsidebar}>
      {activeboard ? (
        isFetching ? (
          <StyledLoader />
        ) : data?.docs.length != 0 ? (
          <FilledBoard boardData={data} />
        ) : (
          <EmptyBoard />
        )
      ) : (
        <Home />
      )}
    </BoardContainer>
  );
}

export default Board;
