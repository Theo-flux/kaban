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
import { Group, Text } from './editboardmodal.css';

interface IEditBoardModalProps {
  open: boolean;
  handleDispatchEditBoardModal: () => void;
}

function EditBoardModal({
  open,
  handleDispatchEditBoardModal,
}: IEditBoardModalProps) {
  return (
    <ModalContainer open={open}>
      <ModalCard open={open}>
        <ModalWrapper>
          <ModalTitle>Edit Board</ModalTitle>
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
            <Button text="Save Changes" btnType="primary" />
          </Group>
        </ModalWrapper>
      </ModalCard>
      <ModalBackdrop
        open={open}
        onClick={() => handleDispatchEditBoardModal()}
      />
    </ModalContainer>
  );
}

export default EditBoardModal;
