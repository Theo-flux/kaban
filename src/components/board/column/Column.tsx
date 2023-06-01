import React, { useRef, useState } from 'react';
import {
  CollectionStatus,
  ColumnContainer,
  StatusIndicator,
  StatusText,
  Tasks,
  TaskPod,
  TaskTitle,
  SubTasks,
} from './column.css';
import { TDocs } from '@/types';

interface ITask {
  id: string;
  title: string;
  sub: Array<{
    _id: string;
    title: string;
    isCompleted: boolean;
  }>;
}

interface ITaskCard extends ITask {
  index: string;
  hoverIndex: string;
  isDraggableIndex: string;
  onDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    index: string,
    id: string
  ) => void;
  onDragEnd: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter: (event: React.DragEvent<HTMLDivElement>, index: string) => void;
  onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>, id: string) => void;
}

const TaskCard = ({
  index,
  hoverIndex,
  isDraggableIndex,
  id,
  title,
  sub,
  onDragStart,
  onDragOver,
  onDragEnd,
  onDragEnter,
  onDragLeave,
  onDrop,
}: ITaskCard) => {
  console.log(id);
  return (
    <TaskPod
      index={index}
      hoverIndex={hoverIndex}
      isDraggableIndex={isDraggableIndex}
      id={id}
      draggable={true}
      onDragStart={e => onDragStart(e, index, id)}
      onDragEnd={e => onDragEnd(e)}
      onDragEnter={e => onDragEnter(e, id)}
      onDragOver={e => onDragOver(e)}
      onDragLeave={e => onDragLeave(e)}
      onDrop={e => onDrop(e, id)}
    >
      <TaskTitle>{title}</TaskTitle>
      {/* <SubTasks>{sub}</SubTasks> */}
    </TaskPod>
  );
};

function Column({ docs }: TDocs) {
  const [isDraggableIndex, setDraggableIndex] = useState('');
  const [hoverIndex, setHoverIndex] = useState('');

  function onDragHandleStart(
    event: React.DragEvent<HTMLDivElement>,
    index: string,
    id: string
  ) {
    setTimeout(() => {
      event.preventDefault();
      event.stopPropagation();
      setDraggableIndex(index);
    }, 0);
  }

  function onDragHandleEnd(event: React.DragEvent<HTMLDivElement>) {
    setDraggableIndex('');
    setHoverIndex('');
  }

  function onDragHandleEnter(
    event: React.DragEvent<HTMLDivElement>,
    index: string
  ) {
    setHoverIndex(index);
  }

  function onDragHandleLeave(event: React.DragEvent<HTMLDivElement>) {}

  function onDragHandleOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    return false;
  }

  function onDropHandler(event: React.DragEvent<HTMLDivElement>, id: string) {
    event.stopPropagation();
    let srcId = isDraggableIndex;
    let element = document.getElementById(id)!;
    let dragSrc = document.getElementById(srcId)!;
    let srcHTML = dragSrc.innerHTML;

    if (srcId != id) {
      dragSrc.innerHTML = element.innerHTML;
      element.innerHTML = srcHTML;
    }

    return false;
  }

  return (
    <ColumnContainer>
      <CollectionStatus>
        <StatusIndicator></StatusIndicator>
        <StatusText>TODO (1)</StatusText>
      </CollectionStatus>
      <Tasks>
        {docs.map((task, index) => {
          const { _id, title, subtasks } = task;
          return (
            <TaskCard
              key={index}
              index={_id}
              hoverIndex={hoverIndex}
              isDraggableIndex={isDraggableIndex}
              id={_id}
              title={title}
              sub={subtasks}
              onDragStart={onDragHandleStart}
              onDragEnd={onDragHandleEnd}
              onDragOver={onDragHandleOver}
              onDragLeave={onDragHandleLeave}
              onDragEnter={onDragHandleEnter}
              onDrop={onDropHandler}
            />
          );
        })}
      </Tasks>
    </ColumnContainer>
  );
}

export default Column;
