import React from 'react';
import { BoardWrapper } from './board.css';
import { Column, NewColumn } from './column';
import { TTasks } from '../../types';

interface IFilledBoardProps {
  boardData: TTasks;
}

function FilledBoard({ boardData }: IFilledBoardProps) {
  const { docs } = boardData;
  let todo = docs.filter(el => el.status == 'Todo');
  let doing = docs.filter(el => el.status == 'Doing');
  let done = docs.filter(el => el.status == 'Done');
  console.log('todo: ', todo.length);
  console.log('doing: ', doing.length);
  console.log('done: ', done.length);
  return (
    <BoardWrapper>
      {todo.length != 0 && <Column docs={todo} />}
      {doing.length != 0 && <Column docs={doing} />}
      {done.length != 0 && <Column docs={done} />}
      {(todo.length != 0 && doing.length != 0 && done.length != 0) || (
        <NewColumn />
      )}
    </BoardWrapper>
  );
}

export default FilledBoard;
