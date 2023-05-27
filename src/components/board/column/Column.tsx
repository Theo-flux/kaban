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

const TaskCard = () => {
  return (
    <TaskPod>
      <TaskTitle>Build UI for onboarding flow</TaskTitle>
      <SubTasks>0 of 3 substasks</SubTasks>
    </TaskPod>
  );
};

function Column() {
  return (
    <ColumnContainer>
      <CollectionStatus>
        <StatusIndicator></StatusIndicator>
        <StatusText>TODO (1)</StatusText>
      </CollectionStatus>
      <Tasks>
        <TaskCard />
      </Tasks>
    </ColumnContainer>
  );
}

export default Column;
