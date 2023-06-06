import React, { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';
import {
  ModalContainer,
  ModalBackdrop,
  ModalCard,
  ModalWrapper,
  TextInput,
  ButtonIcon,
  Button,
  StyledPlusIcon,
  DeletableInput,
} from '@/shared';
import {
  ModalTitle,
  Row,
  StyledMoreIcon,
  MoreCard,
  EditText,
  DeleteText,
} from './taskmodal.css';
import { useAppSelector } from '@/app/hooks';

interface ITaskModalProps {
  open: boolean;
  handleDispatchTaskModal: () => void;
}

function TaskModal({ open, handleDispatchTaskModal }: ITaskModalProps) {
  const { title, description, status, subtasks } = useAppSelector(
    state => state.board
  );

  const [openmoremodal, setopenmoremodal] = useState(false);
  const ref = useClickOutside(() => setopenmoremodal(false));

  const handleSetopenmore = () => {
    setopenmoremodal(!openmoremodal);
  };

  return (
    <ModalContainer open={open}>
      <ModalCard open={open}>
        <ModalWrapper>
          <Row>
            <ModalTitle>{title}</ModalTitle>
            <StyledMoreIcon onClick={() => handleSetopenmore()} />
          </Row>
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
