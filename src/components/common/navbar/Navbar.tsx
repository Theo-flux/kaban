import { useState } from 'react';
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

interface INav {
  activeboard: string;
  showsidebar: boolean;
  openmobilenav: boolean;
  handleDispatchDeleteModal: () => void;
  handleDispatchAddTaskModal: () => void;
  handleSetopenmobilenav: () => void;
}

function Navbar({
  activeboard,
  showsidebar,
  openmobilenav,
  handleDispatchDeleteModal,
  handleDispatchAddTaskModal,
  handleSetopenmobilenav,
}: INav) {
  const isFromTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const [openmore, setopenmore] = useState(false);
  const ref = useClickOutside(() => setopenmore(false));

  const handleSetopenmore = () => {
    setopenmore(!openmore);
  };

  const handleDispatchDeleteModalWithin = () => {
    setopenmore(!openmore);
    handleDispatchDeleteModal();
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
        <EditText onClick={() => setopenmore(!openmore)}>Edit Board</EditText>
        <DeleteText onClick={() => handleDispatchDeleteModalWithin()}>
          Delete Board
        </DeleteText>
      </MoreCard>
    </NavContainer>
  );
}

export default Navbar;
