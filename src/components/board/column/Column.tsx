import React from 'react';
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

type TTaskCard = {
  id: string;
  title: string;
  sub: string;
};

const taskList: Array<TTaskCard> = [
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

const TaskCard = ({ id, title, sub }: TTaskCard) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/html', event.currentTarget.id);
  };

  return (
    <TaskPod id={id} draggable={true} onDragStart={handleDragStart}>
      <TaskTitle>{title}</TaskTitle>
      <SubTasks>{sub}</SubTasks>
    </TaskPod>
  );
};

function Column() {
  const [dragOver, setDragOver] = React.useState(false);
  const handleDragOverStart = () => setDragOver(true);
  const handleDragOverEnd = () => setDragOver(false);

  const handleOnDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleOnDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text/html');
    console.log(`Somebody dropped an element with id: ${id}`);
    event.currentTarget.appendChild(document.getElementById(id)!);
    setDragOver(false);
  };

  return (
    <ColumnContainer>
      <CollectionStatus>
        <StatusIndicator></StatusIndicator>
        <StatusText>TODO (1)</StatusText>
      </CollectionStatus>
      <Tasks onDragOver={handleOnDragOver} onDrop={handleOnDrop}>
        {taskList.map((task, index) => {
          const { id, title, sub } = task;
          return <TaskCard key={index} id={id} title={title} sub={sub} />;
        })}
      </Tasks>
    </ColumnContainer>
  );
}

export default Column;
