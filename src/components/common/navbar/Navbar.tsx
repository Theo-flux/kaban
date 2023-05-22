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
  openDeleteModal: boolean;
  handleSetOpendDeleteModal: () => void;
  handleSetopenmobilenav: () => void;
}

function Navbar({
  activeboard,
  showsidebar,
  openmobilenav,
  openDeleteModal,
  handleSetopenmobilenav,
  handleSetOpendDeleteModal,
}: INav) {
  const isFromTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const [openMore, setOpenMore] = useState(false);
  const ref = useClickOutside(() => setOpenMore(false));

  const handleSetOpenMore = () => {
    setOpenMore(!openMore);
  };

  const handleSetOpendDeleteModalWithin = () => {
    setOpenMore(!openMore);
    handleSetOpendDeleteModal();
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
              btnType="primary"
              leftIcon={<StyledPlusIcon />}
              text="Add New Task"
              hideTextOnMobile={true}
            />
            <StyledMoreIcon onClick={() => handleSetOpenMore()} />
          </NavOther>
        </NavInner>
      </NavWrapper>
      <MoreCard ref={ref} openMore={openMore}>
        <EditText onClick={() => setOpenMore(!openMore)}>Edit Board</EditText>
        <DeleteText onClick={() => handleSetOpendDeleteModalWithin()}>
          Delete Board
        </DeleteText>
      </MoreCard>
    </NavContainer>
  );
}

export default Navbar;
