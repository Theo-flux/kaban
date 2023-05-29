import React, { useState } from 'react';
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
  isDraggableIndex: number;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragEnd: (event: React.DragEvent<HTMLDivElement>) => void;
}

const TaskCard = ({
  index,
  isDraggableIndex,
  id,
  title,
  sub,
  onDragStart,
  onDragEnd,
}: ITaskCard) => {
  return (
    <TaskPod
      index={index}
      isDraggableIndex={isDraggableIndex}
      id={id}
      draggable={true}
      onDragStart={e => onDragStart(e, index)}
      onDragEnd={e => onDragEnd(e)}
    >
      <TaskTitle>{title}</TaskTitle>
      <SubTasks>{sub}</SubTasks>
    </TaskPod>
  );
};

function Column() {
  const [isDraggableIndex, setDraggableIndex] = useState(-1);

  function onDragHandleStart(
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) {
    setTimeout(() => setDraggableIndex(index), 0);
  }

  function onDragHandleEnd(event: React.DragEvent<HTMLDivElement>) {
    setDraggableIndex(-1);
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
              isDraggableIndex={isDraggableIndex}
              id={id}
              title={title}
              sub={sub}
              onDragStart={onDragHandleStart}
              onDragEnd={onDragHandleEnd}
            />
          );
        })}
      </Tasks>
    </ColumnContainer>
  );
}

export default Column;
