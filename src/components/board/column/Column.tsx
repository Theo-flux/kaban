import React, { useEffect, useRef, useState } from 'react';
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
import { TDoc, TColumnDatum } from '@/types';
import { useAppDispatch } from '@/app/hooks';
import { boardActions } from '@/app/features/boards/boardSlice';
import { modalActions } from '@/app/features/modals/modalSlice';
import { getRandomColor } from '@/utils';

interface ITaskCard {
  index: string;
  task: TDoc;
  hoverIndex: string;
  isDraggableIndex: string;
  onDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    index: string,
    id: string
  ) => void;
  onDragEnd: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter: (event: React.DragEvent<HTMLDivElement>, index: string) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>, id: string) => void;
}

const TaskCard = ({
  index,
  task,
  hoverIndex,
  isDraggableIndex,
  onDragStart,
  onDragEnd,
  onDragEnter,
  onDrop,
}: ITaskCard) => {
  const { title, subtasks } = task;
  const { SETACTIVETASK } = boardActions;
  const { TASKMODAL } = modalActions;
  const dispatch = useAppDispatch();

  const handleOpenTaskModal = () => {
    dispatch(SETACTIVETASK(task));
    dispatch(TASKMODAL());
  };

  const completedSubtasks = subtasks.reduce((agr, subtask) => {
    if (subtask.isCompleted) {
      agr++;
    }
    return agr;
  }, 0);

  const totalSubtasks = subtasks.length;

  return (
    <TaskPod
      index={index}
      hoverIndex={hoverIndex}
      isDraggableIndex={isDraggableIndex}
      id={index}
      draggable={true}
      onDragStart={e => onDragStart(e, index, index)}
      onDragEnd={e => onDragEnd(e)}
      onDragEnter={e => onDragEnter(e, index)}
      onDrop={e => onDrop(e, index)}
      onClick={() => handleOpenTaskModal()}
    >
      <TaskTitle>{title}</TaskTitle>
      <SubTasks>
        {completedSubtasks} of {totalSubtasks} subtasks
      </SubTasks>
    </TaskPod>
  );
};

interface IColumnProps {
  docs: TColumnDatum;
}

function Column({ docs }: IColumnProps) {
  const { name, tasks } = docs;
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
    console.log('src: ', isDraggableIndex);
  }

  let color = useRef(getRandomColor());

  return (
    <ColumnContainer>
      <CollectionStatus>
        <StatusIndicator color={color.current}></StatusIndicator>
        <StatusText>
          {name} ({tasks.length})
        </StatusText>
      </CollectionStatus>
      <Tasks>
        {tasks.map((task, index) => {
          return (
            <TaskCard
              key={index}
              task={task}
              index={task._id}
              hoverIndex={hoverIndex}
              isDraggableIndex={isDraggableIndex}
              onDragStart={onDragHandleStart}
              onDragEnd={onDragHandleEnd}
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
