import React, { useState } from 'react';
import { Loader } from '@mantine/core';
import {
  ModalContainer,
  ModalBackdrop,
  ModalCard,
  ModalWrapper,
  ModalTitle,
  TextInput,
  ButtonIcon,
  ButtonWithLoader,
  StyledPlusIcon,
  DeletableInput,
} from '@/shared';
import { Group, Text } from './addnewboardmodal.css';
import { useCreateNewBoardMutation } from '@/app/features/api/apiSlice';
import { useRouter } from 'next/navigation';

interface IAddNewBoardModalProps {
  open: boolean;
  handleDispatchAddBoardModal: () => void;
  handleSetActiveBoard: (val: string) => void;
}

function AddNewBoardModal({
  open,
  handleDispatchAddBoardModal,
  handleSetActiveBoard,
}: IAddNewBoardModalProps) {
  const [updateBoard, { isLoading }] = useCreateNewBoardMutation();
  const [error, setError] = useState('');
  const [boardName, setBoardName] = useState({ name: '' });
  const [columnArr, setColumnArr] = useState<
    Array<{ id: number; name: string }>
  >([]);
  const router = useRouter();

  const handleOnChangeBoardName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBoardName({ ...boardName, name: event.target.value });
  };

  const handleSubmit = async () => {
    if (boardName.name == '') {
      return setError("Board name can't be empty");
    } else setError('');
    const colsArr = columnArr.map(el => el.name);
    const res = await updateBoard({ name: boardName.name, cols: colsArr });
    router.push(`/boards/${boardName.name}`);
    handleSetActiveBoard(boardName.name);
    handleDispatchAddBoardModal();
  };

  // function to add more columns to col array
  const handleAddColumn = () => {
    setColumnArr(prevState => [
      ...prevState,
      { id: prevState.length, name: '' },
    ]);
  };

  // onchange event callback function
  const handleColumnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;

    setColumnArr(prevState =>
      prevState.map(el => {
        if (el.id == index) {
          el.name = value;
        }
        return el;
      })
    );
  };

  // onclick event callback function to delete input field
  const handleColumnDelete = (id: number) => {
    const removeItem = columnArr.filter(el => {
      return el.id != id;
    });

    setColumnArr(removeItem);
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
            {columnArr.map((col, index) => {
              return (
                <DeletableInput
                  key={index}
                  index={col.id}
                  id={`${col.name}-${col.id}`}
                  name={col.name}
                  error={''}
                  onChange={handleColumnChange}
                  handleDelete={handleColumnDelete}
                />
              );
            })}
            <ButtonIcon
              leftIcon={<StyledPlusIcon btnType="secondary" />}
              text="Add New Column"
              hideTextOnMobile={false}
              btnType="secondary"
              onClick={() => handleAddColumn()}
            />
          </Group>

          <Group>
            <ButtonWithLoader
              isLoading={isLoading}
              loaderColor="white"
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
