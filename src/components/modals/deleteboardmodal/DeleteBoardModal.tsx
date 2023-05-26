import React, { useEffect } from 'react';
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
import {
  useDeleteBoardMutation,
  useGetAllBoardsQuery,
} from '@/app/features/api/apiSlice';

interface IDeleBoardModalProps {
  open: boolean;
  activeboard: string;
  handleDispatchDeleteModal: () => void;
  handleSetActiveBoard: (val: string) => void;
}

function DeleteBoardModal({
  open,
  activeboard,
  handleDispatchDeleteModal,
  handleSetActiveBoard,
}: IDeleBoardModalProps) {
  const [deleteBoard, { isLoading }] = useDeleteBoardMutation();
  const { data, isLoading: isGetAllBoardLoading } = useGetAllBoardsQuery();

  const handleDeleteBoard = async () => {
    await deleteBoard({ name: activeboard });
    handleDispatchDeleteModal();
  };

  useEffect(() => {
    if (!isLoading) {
      data && handleSetActiveBoard(data?.collections[0]);
    }
  }, [isLoading, isGetAllBoardLoading]);

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
