import React from 'react';
import {
  Button,
  ModalContainer,
  ModalBackdrop,
  ModalWrapper,
  ModalCard,
} from '@/shared';
import {
  StyledDeleteTitle,
  StyledDeleteText,
  BtnWrapper,
} from './deleteboardmodal.css';

interface IDeleBoardModalProps {
  open: boolean;
  activeboard: string;
  handleDispatchDeleteModal: () => void;
}

function DeleteBoardModal({
  open,
  activeboard,
  handleDispatchDeleteModal,
}: IDeleBoardModalProps) {
  return (
    <ModalContainer open={open}>
      <ModalCard open={open}>
        <ModalWrapper>
          <StyledDeleteTitle>Delete this board?</StyledDeleteTitle>
          <StyledDeleteText>
            Are you sure you want to delete the ‘{activeboard}’ board? This
            action will remove all columns and tasks and cannot be reversed.
          </StyledDeleteText>

          <BtnWrapper>
            <Button btnType="destructive" text="Delete" />
            <Button
              onClick={() => handleDispatchDeleteModal()}
              btnType="secondary"
              text="Cancel"
            />
          </BtnWrapper>
        </ModalWrapper>
      </ModalCard>
      <ModalBackdrop open={open} onClick={() => handleDispatchDeleteModal()} />
    </ModalContainer>
  );
}

export default DeleteBoardModal;
