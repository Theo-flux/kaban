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
  onDragEnter: (event: React.DragEvent<HTMLDivElement>, index: string) => void;
  onDrop: (
    event: React.DragEvent<HTMLDivElement>,
    id: string,
    task: TDoc
  ) => void;
}

const TaskCard = ({
  index,
  hoverIndex,
  isDraggableIndex,
  task,
  onDragStart,
  onDragEnd,
  onDragEnter,
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
      onDrop={e => onDrop(e, id, task)}
      onClick={() => handleOpenTaskModal()}
    >
      <div>
        <TaskTitle>{title}</TaskTitle>
        <SubTasks>
          {completed} of {subtasks.length} subtasks
        </SubTasks>
      </div>
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

  function onDropHandler(
    event: React.DragEvent<HTMLDivElement>,
    id: string,
    task: TDoc
  ) {
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
    console.log(task);
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
