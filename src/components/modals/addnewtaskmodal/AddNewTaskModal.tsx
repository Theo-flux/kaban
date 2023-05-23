import React from 'react';
import { ModalContainer, ModalCard, ModalWrapper, ModalTitle } from '@/shared';

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
          
        </ModalWrapper>
      </ModalCard>
    </ModalContainer>
  );
}

export default AddNewTaskModal;
