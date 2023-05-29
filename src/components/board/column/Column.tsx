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

interface ITask {
  id: string;
  title: string;
  sub: string;
}

const taskList: Array<ITask> = [
  {
    id: 'task-1',
    title: 'Build UI for onboarding flow',
    sub: '0 of 3 subtasks',
  },
  {
    id: 'task-2',
    title: 'Build UI for search',
    sub: '0 of 1 subtasks',
  },
  {
    id: 'task-3',
    title: 'Create template structures',
    sub: '0 of 2 subtasks',
  },
  {
    id: 'task-4',
    title: 'QA and test all major user journeys',
    sub: '0 of 2 subtasks',
  },
];

interface ITaskCard extends ITask {
  index: number;
  hoverIndex: number;
  isDraggableIndex: number;
  onDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    index: number,
    id: string
  ) => void;
  onDragEnd: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter: (event: React.DragEvent<HTMLDivElement>, index: number) => void;
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
  return (
    <TaskPod
      index={index}
      hoverIndex={hoverIndex}
      isDraggableIndex={isDraggableIndex}
      id={id}
      draggable={true}
      onDragStart={e => onDragStart(e, index, id)}
      onDragEnd={e => onDragEnd(e)}
      onDragEnter={e => onDragEnter(e, index)}
      onDragOver={e => onDragOver(e)}
      onDragLeave={e => onDragLeave(e)}
      onDrop={e => onDrop(e, id)}
    >
      <TaskTitle>{title}</TaskTitle>
      <SubTasks>{sub}</SubTasks>
    </TaskPod>
  );
};

function Column() {
  const [isDraggableIndex, setDraggableIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState(-1);

  // console.log(taskRef);

  function onDragHandleStart(
    event: React.DragEvent<HTMLDivElement>,
    index: number,
    id: string
  ) {
    setTimeout(() => {
      event.preventDefault();
      event.stopPropagation();
      setDraggableIndex(index);
    }, 0);
  }

  function onDragHandleEnd(event: React.DragEvent<HTMLDivElement>) {
    setDraggableIndex(-1);
    setHoverIndex(-1);
  }

  function onDragHandleEnter(
    event: React.DragEvent<HTMLDivElement>,
    index: number
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
    let srcId = `task-${isDraggableIndex + 1}`;
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
        {taskList.map((task, index) => {
          const { id, title, sub } = task;
          return (
            <TaskCard
              key={index}
              index={index}
              hoverIndex={hoverIndex}
              isDraggableIndex={isDraggableIndex}
              id={id}
              title={title}
              sub={sub}
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
