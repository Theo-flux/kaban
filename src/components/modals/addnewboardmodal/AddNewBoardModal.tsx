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
import { Group } from './addnewboardmodal.css';

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
      <ModalBackdrop
        open={open}
        onClick={() => handleDispatchAddBoardModal()}
      />
    </ModalContainer>
  );
}

export default AddNewBoardModal;
