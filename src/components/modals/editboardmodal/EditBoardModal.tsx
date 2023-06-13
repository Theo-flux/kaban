import React, { useEffect, useState } from 'react';
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
  UnEditableDeletableInput,
  DeletableInput,
} from '@/shared';
import { Group, Text } from './editboardmodal.css';
import { useAppSelector } from '@/app/hooks';

interface IEditBoardModalProps {
  open: boolean;
  activeboard: string;
  handleDispatchEditBoardModal: () => void;
}

function EditBoardModal({
  open,
  activeboard,
  handleDispatchEditBoardModal,
}: IEditBoardModalProps) {
  const { allStatus } = useAppSelector(state => state.allStatus);
  const [addNewColumn, setAddNewColumn] = useState<Array<string>>([]);

  const handleAddColumn = () => {
    setAddNewColumn(prevState => [...prevState, 'New']);
    console.log(addNewColumn);
  };

  useEffect(() => {
    if (typeof window != 'undefined') {
      let textInputEl = document.getElementById(`${activeboard}-textinput`);
      textInputEl?.setAttribute('value', activeboard);
    }
  }, [activeboard]);

  return (
    <ModalContainer open={open}>
      <ModalCard open={open}>
        <ModalWrapper>
          <ModalTitle>Edit Board</ModalTitle>
          <Group>
            <TextInput
              id={`${activeboard}-textinput`}
              label="Board Name"
              name="board-name"
              placeholder="e.g Platform Launch"
              onChange={() => {}}
            />
          </Group>

          <Group>
            <Text>Board Columns</Text>
            {allStatus.map((status, index) => {
              return (
                <UnEditableDeletableInput
                  key={index}
                  name={`${activeboard}-${status}`}
                  value={status}
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
