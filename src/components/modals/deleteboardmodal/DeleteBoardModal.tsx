import React from 'react';
import {
  Button,
  ModalContainer,
  ModalBackdrop,
  ModalWrapper,
  ModalCard,
  ButtonWithLoader,
} from '@/shared';
import {
  StyledDeleteTitle,
  StyledDeleteText,
  BtnWrapper,
} from './deleteboardmodal.css';
import { useDeleteBoardMutation } from '@/app/features/api/apiSlice';

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
  const [deleteBoard, { isLoading }] = useDeleteBoardMutation();

  const handleDeleteBoard = async () => {
    await deleteBoard({ name: activeboard });
    handleDispatchDeleteModal();
  };

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
            <ButtonWithLoader
              isLoading={isLoading}
              loaderColor="white"
              btnType="destructive"
              text="Delete"
              onClick={() => handleDeleteBoard()}
            />
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
