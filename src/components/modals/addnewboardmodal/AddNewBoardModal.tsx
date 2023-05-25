import React, { useState } from 'react';
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
import { useCreateNewBoardMutation } from '@/app/features/api/apiSlice';

interface IAddNewBoardModalProps {
  open: boolean;
  handleDispatchAddBoardModal: () => void;
}

function AddNewBoardModal({
  open,
  handleDispatchAddBoardModal,
}: IAddNewBoardModalProps) {
  const [updateBoard, { isLoading }] = useCreateNewBoardMutation();
  const [error, setError] = useState('');
  const [boardName, setBoardName] = useState({ name: '' });

  const handleOnChangeBoardName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBoardName({ ...boardName, name: event.target.value });
  };

  const handleSubmit = async () => {
    if (boardName.name == '') {
      return setError("Board name can't be empty");
    } else setError('');
    await updateBoard({ name: boardName.name });
    handleDispatchAddBoardModal();
  };

  return (
    <ModalContainer open={open}>
      <ModalCard open={open}>
        <ModalWrapper>
          <ModalTitle>Add New Board</ModalTitle>
          <Group>
            <TextInput
              label="Board Name"
              name="boardName"
              placeholder="e.g Platform Launch"
              onChange={handleOnChangeBoardName}
              error={error}
            />
          </Group>

          <Group>
            <Text>Board Columns</Text>
            <DeletableInput name="todo" value="Todo" onChange={() => {}} />
            <DeletableInput name="doing" value="Doing" onChange={() => {}} />
            <DeletableInput name="done" value="Done" onChange={() => {}} />
            <ButtonIcon
              leftIcon={<StyledPlusIcon btnType="secondary" />}
              text="Add New Column"
              hideTextOnMobile={false}
              btnType="secondary"
            />
          </Group>

          <Group>
            <Button
              text="Create New Board"
              btnType="primary"
              onClick={() => handleSubmit()}
            />
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
