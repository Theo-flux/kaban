import React from 'react';
import { Button, ModalContainer, ModalWrapper } from '@/shared';
import {
  DeleteBoardCard,
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
      <DeleteBoardCard open={open}>
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
      </DeleteBoardCard>
    </ModalContainer>
  );
}

export default DeleteBoardModal;
