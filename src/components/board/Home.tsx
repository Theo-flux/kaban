import React from 'react';
import {
  BoardContainer,
  EmptyBoardWrapper,
  BoardWrapper,
  EmptyBoardText,
} from './board.css';
import { ButtonIcon, StyledPlusIcon } from '@/shared';
import { modalActions } from '@/app/features/modals/modalSlice';
import { useDispatch } from 'react-redux';

function Home() {
  const { ADDBOARD } = modalActions;
  const dispatch = useDispatch();
  return (
    <EmptyBoardWrapper>
      <EmptyBoardText>
        Select a board from the side or create a new one to get started.
      </EmptyBoardText>
      <ButtonIcon
        btnType="primary"
        leftIcon={<StyledPlusIcon />}
        text="Create New Board"
        hideTextOnMobile={false}
        onClick={() => dispatch(ADDBOARD())}
      />
    </EmptyBoardWrapper>
  );
}

export default Home;
