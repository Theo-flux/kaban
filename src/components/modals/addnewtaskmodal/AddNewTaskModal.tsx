import React from 'react';
import {
  ModalContainer,
  ModalBackdrop,
  ModalCard,
  ModalWrapper,
  ModalTitle,
  TextInput,
  TextAreaInput,
  SelectInput,
  ButtonIcon,
  Button,
  StyledPlusIcon,
} from '@/shared';
import { Group } from './addnewtaskmodal.css';

interface IAddNewTaskModalProps {
  open: boolean;
  handleDispatchAddTaskModal: () => void;
}

function AddNewTaskModal({
  open,
  handleDispatchAddTaskModal,
}: IAddNewTaskModalProps) {
  return (
    <ModalContainer open={open}>
      <ModalCard open={open}>
        <ModalWrapper>
          <ModalTitle>Add New Task</ModalTitle>
          <Group>
            <TextInput
              label="Title"
              name="title"
              placeholder="e.g Take coffee break"
            />

            <TextAreaInput
              label="Description"
              name="description"
              placeholder="e.g. It’s always good to take a break. This 15 minute break will 
            recharge the batteries a little."
            />
          </Group>

          <Group>
            <ButtonIcon
              leftIcon={<StyledPlusIcon btnType="secondary" />}
              text="Add New Subtask"
              hideTextOnMobile={false}
              btnType="secondary"
            />
          </Group>

          <Group>
            <SelectInput
              label="Status"
              name="status"
              options={['Todo', 'Done', 'Doing']}
            />
            <Button text="Create Task" btnType="primary" />
          </Group>
        </ModalWrapper>
      </ModalCard>
      <ModalBackdrop open={open} onClick={() => handleDispatchAddTaskModal()} />
    </ModalContainer>
  );
}

export default AddNewTaskModal;
