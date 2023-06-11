import React, { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';
import {
  ModalContainer,
  ModalBackdrop,
  ModalCard,
  ModalWrapper,
  CheckInput,
  TextInput,
  ButtonIcon,
  Button,
  StyledPlusIcon,
  DeletableInput,
  SelectInput,
} from '@/shared';
import {
  ModalTitle,
  ModalSubTitle,
  Row,
  StyledMoreIcon,
  MoreCard,
  EditText,
  DeleteText,
  Group,
} from './taskmodal.css';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { taskActions } from '@/app/features/task/taskSlice';

interface ITaskModalProps {
  open: boolean;
  handleDispatchTaskModal: () => void;
}

function TaskModal({ open, handleDispatchTaskModal }: ITaskModalProps) {
  const { title, description, status, subtasks } = useAppSelector(
    state => state.task
  );
  const { allStatus } = useAppSelector(state => state.allStatus);

  let { EDITISCOMPLETE } = taskActions;
  let dispatch = useAppDispatch();

  const CompletedSubtasks = subtasks.reduce((aggr, subtask) => {
    if (subtask.isCompleted) {
      aggr++;
    }

    return aggr;
  }, 0);

  const subtaskSize = subtasks.length;

  const [openmoremodal, setopenmoremodal] = useState(false);
  const ref = useClickOutside(() => setopenmoremodal(false));

  const handleSetopenmore = () => {
    setopenmoremodal(!openmoremodal);
  };

  const handleSubtaskClick = (arg: number, isCompleted: boolean) => {
    let status = isCompleted;
    if (isCompleted) {
      status = false;
    } else {
      status = true;
    }

    dispatch(EDITISCOMPLETE({ index: arg, isCompleted: status }));
  };

  return (
    <ModalContainer open={open}>
      <ModalCard open={open}>
        <ModalWrapper>
          <Group>
            <Row>
              <ModalTitle>{title}</ModalTitle>
              <StyledMoreIcon onClick={() => handleSetopenmore()} />
            </Row>
          </Group>

          <Group>
            <EditText>{description}</EditText>
          </Group>

          <Group>
            <ModalSubTitle>
              Subtasks ({CompletedSubtasks} of {subtaskSize})
            </ModalSubTitle>
            {subtasks.map((subtask, index) => {
              const { isCompleted, title } = subtask;
              return (
                <CheckInput
                  key={index}
                  label={title}
                  checked={isCompleted}
                  index={index}
                  handleOnclick={handleSubtaskClick}
                />
              );
            })}
          </Group>

          <Group>
            <SelectInput
              label="Current Status"
              name="status"
              options={allStatus || []}
              onChange={() => {}}
            />
          </Group>
        </ModalWrapper>
        <MoreCard ref={ref} openmore={openmoremodal}>
          <EditText onClick={() => handleSetopenmore()}>Edit Board</EditText>
          <DeleteText onClick={() => handleSetopenmore()}>
            Delete Board
          </DeleteText>
        </MoreCard>
      </ModalCard>
      <ModalBackdrop open={open} onClick={() => handleDispatchTaskModal()} />
    </ModalContainer>
  );
}

export default TaskModal;
