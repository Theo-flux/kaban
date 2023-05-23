import React from 'react';
import { ModalContainer, ModalCard, ModalWrapper } from '@/shared';

interface IAddNewTaskModalProps {
  open: boolean;
  handleDispatchAddTaskModal: () => void;
}

function AddNewTaskModal({
  open,
  handleDispatchAddTaskModal,
}: IAddNewTaskModalProps) {
  return (
    <ModalContainer open={open} onClick={() => handleDispatchAddTaskModal()}>
      <ModalCard open={open}>
        <ModalWrapper>
          <p>Open add task</p>
        </ModalWrapper>
      </ModalCard>
    </ModalContainer>
  );
}

export default AddNewTaskModal;
