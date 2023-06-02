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
import { TDoc, TDocs } from '@/types';
import { useAppDispatch } from '@/app/hooks';
import { boardActions } from '@/app/features/boards/boardSlice';
import { modalActions } from '@/app/features/modals/modalSlice';

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
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter: (event: React.DragEvent<HTMLDivElement>, index: string) => void;
  onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>, id: string) => void;
}

const TaskCard = ({
  index,
  hoverIndex,
  isDraggableIndex,
  task,
  onDragStart,
  onDragOver,
  onDragEnd,
  onDragEnter,
  onDragLeave,
  onDrop,
}: ITaskCard) => {
  const { _id: id, title, subtasks } = task;

  const { SETACTIVETASK } = boardActions;
  const { TASKMODAL } = modalActions;
  const dispatch = useAppDispatch();

  const handleOpenTaskModal = () => {
    dispatch(SETACTIVETASK(task));
    dispatch(TASKMODAL());
  };

  const completed = subtasks.reduce((total, subtask) => {
    const { isCompleted } = subtask;
    if (isCompleted) {
      total += 1;
    }
    return total;
  }, 0);

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
      onClick={() => handleOpenTaskModal()}
    >
      <TaskTitle>{title}</TaskTitle>
      <SubTasks>
        {completed} of {subtasks.length} subtasks
      </SubTasks>
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
  }

  return (
    <ColumnContainer>
      <CollectionStatus>
        <StatusIndicator status={docs[0].status}></StatusIndicator>
        <StatusText>
          {docs[0].status} ({docs.length})
        </StatusText>
      </CollectionStatus>
      <Tasks>
        {docs.map((task, index) => {
          return (
            <TaskCard
              key={index}
              index={task._id}
              hoverIndex={hoverIndex}
              isDraggableIndex={isDraggableIndex}
              task={task}
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
