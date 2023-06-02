import React from 'react';
import {
  ModalContainer,
  ModalBackdrop,
  ModalCard,
  ModalWrapper,
  ModalTitle,
  TextInput,
  ButtonIcon,
  Button,
  StyledPlusIcon,
  DeletableInput,
} from '@/shared';
import { useAppSelector } from '@/app/hooks';

interface ITaskModalProps {
  open: boolean;
  handleDispatchTaskModal: () => void;
}

function TaskModal({ open, handleDispatchTaskModal }: ITaskModalProps) {
  const { title, description, status, subtasks } = useAppSelector(
    state => state.board
  );
  return (
    <ModalContainer open={open}>
      <ModalCard open={open}>
        <ModalWrapper>
          <ModalTitle>{title}</ModalTitle>
        </ModalWrapper>
      </ModalCard>
      <ModalBackdrop open={open} onClick={() => handleDispatchTaskModal()} />
    </ModalContainer>
  );
}

export default TaskModal;
