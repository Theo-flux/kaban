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
import { useAppSelector } from '@/app/hooks';

interface IEditBoardModalProps {
  open: boolean;
  handleDispatchEditBoardModal: () => void;
}

function EditBoardModal({
  open,
  handleDispatchEditBoardModal,
}: IEditBoardModalProps) {
  const { allStatus } = useAppSelector(state => state.allStatus);

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
              onChange={() => {}}
            />
          </Group>

          <Group>
            <Text>Board Columns</Text>
            {allStatus.map((status, index) => {
              if (typeof window !== 'undefined') {
                let inputEl = document.getElementById(status);
                if (status) {
                  inputEl?.setAttribute('value', status);
                }
              }
              return (
                <DeletableInput
                  key={index}
                  name={status}
                  optionalVal={status}
                  id={status}
                />
              );
            })}
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
