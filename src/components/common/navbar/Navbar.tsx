import { useState, useEffect } from 'react';
import { useClickOutside } from '@mantine/hooks';
import { useMediaQuery } from 'react-responsive';
import {
  NavContainer,
  NavWrapper,
  NavLogoWrapper,
  NavInner,
  NavTitle,
  NavArrowIcon,
  NavActiveBoard,
  NavOther,
  StyledMoreIcon,
  MoreCard,
  EditText,
  DeleteText,
} from './navbar.css';
import { NavLogo, ButtonIcon, StyledPlusIcon } from '@/shared';
import { modalActions } from '@/app/features/modals/modalSlice';
import { useAppDispatch } from '@/app/hooks';
import { useGetTasksByCollectionQuery } from '@/app/features/api/apiSlice';

interface INav {
  activeboard: string;
  showsidebar: boolean;
  openmobilenav: boolean;
  handleSetopenmobilenav: () => void;
}

function Navbar({
  activeboard,
  showsidebar,
  openmobilenav,
  handleSetopenmobilenav,
}: INav) {
  const isFromTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const { data, isFetching } = useGetTasksByCollectionQuery(activeboard, {
    refetchOnMountOrArgChange: true,
  });
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (activeboard && data?.docs.length != 0) {
      return setIsDisabled(false);
    }
    return setIsDisabled(true);
  }, [data, activeboard]);

  const [openmore, setopenmore] = useState(false);
  const ref = useClickOutside(() => setopenmore(false));

  const dispatch = useAppDispatch();
  const { DELETEBOARD, ADDTASK, EDITBOARD } = modalActions;

  const handleSetopenmore = () => {
    setopenmore(!openmore);
  };

  const handleDispatchDeleteModal = () => {
    dispatch(DELETEBOARD());
  };

  const handleDispatchEditBoardModal = () => {
    dispatch(EDITBOARD());
  };

  const handleDispatchAddTaskModal = () => {
    dispatch(ADDTASK());
  };

  const handleDispatchDeleteModalWithin = () => {
    setopenmore(!openmore);
    handleDispatchDeleteModal();
  };

  const handleDispatchEditBoardModalWithin = () => {
    setopenmore(!openmore);
    handleDispatchEditBoardModal();
  };

  return (
    <NavContainer showsidebar={showsidebar}>
      <NavWrapper>
        {isFromTablet || (
          <NavLogoWrapper>
            <NavLogo />
          </NavLogoWrapper>
        )}
        {isFromTablet && showsidebar == false && (
          <NavLogoWrapper>
            <NavLogo />
          </NavLogoWrapper>
        )}
        <NavInner>
          <NavActiveBoard onClick={() => handleSetopenmobilenav()}>
            <NavTitle>{activeboard}</NavTitle>
            <NavArrowIcon openmobilenav={openmobilenav} />
          </NavActiveBoard>

          <NavOther>
            <ButtonIcon
              disabled={isDisabled}
              onClick={() => handleDispatchAddTaskModal()}
              btnType="primary"
              leftIcon={<StyledPlusIcon />}
              text="Add New Task"
              hideTextOnMobile={true}
            />
            <StyledMoreIcon onClick={() => handleSetopenmore()} />
          </NavOther>
        </NavInner>
      </NavWrapper>
      <MoreCard ref={ref} openmore={openmore}>
        <EditText onClick={() => handleDispatchEditBoardModalWithin()}>
          Edit Board
        </EditText>
        <DeleteText onClick={() => handleDispatchDeleteModalWithin()}>
          Delete Board
        </DeleteText>
      </MoreCard>
    </NavContainer>
  );
}

export default Navbar;
