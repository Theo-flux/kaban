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
import { Group, Text } from './addnewboardmodal.css';

interface IAddNewBoardModalProps {
  open: boolean;
  handleDispatchAddBoardModal: () => void;
}

function AddNewBoardModal({
  open,
  handleDispatchAddBoardModal,
}: IAddNewBoardModalProps) {
  return (
    <ModalContainer open={open}>
      <ModalCard open={open}>
        <ModalWrapper>
          <ModalTitle>Add New Board</ModalTitle>
          <Group>
            <TextInput
              label="Board Name"
              name="board-name"
              placeholder="e.g Platform Launch"
            />
          </Group>

          <Group>
            <Text>Board Columns</Text>
            <DeletableInput name="todo" value="Todo" />
            <DeletableInput name="doing" value="Doing" />
            <DeletableInput name="done" value="Done" />
            <ButtonIcon
              leftIcon={<StyledPlusIcon btnType="secondary" />}
              text="Add New Column"
              hideTextOnMobile={false}
              btnType="secondary"
            />
          </Group>

          <Group>
            <Button text="Create New Board" btnType="primary" />
          </Group>
        </ModalWrapper>
      </ModalCard>
      <ModalBackdrop
        open={open}
        onClick={() => handleDispatchAddBoardModal()}
      />
    </ModalContainer>
  );
}

export default AddNewBoardModal;
