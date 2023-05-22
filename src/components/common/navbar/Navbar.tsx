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
  StyledPlusIcon,
  StyledMoreIcon,
  MoreCard,
  EditText,
  DeleteText,
} from './navbar.css';
import { NavLogo, ButtonIcon } from '@/shared';

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

  const [openMore, setOpenMore] = useState(false);
  const ref = useClickOutside(() => setOpenMore(false));

  const handleSetOpenMore = () => {
    openMore ? setOpenMore(false) : setOpenMore(true);
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
            <ButtonIcon leftIcon={<StyledPlusIcon />} text="Add New Task" />
            <StyledMoreIcon onClick={() => handleSetOpenMore()} />
          </NavOther>
        </NavInner>
      </NavWrapper>
      <MoreCard ref={ref} openMore={openMore}>
        <EditText onClick={() => setOpenMore(!openMore)}>Edit Board</EditText>
        <DeleteText onClick={() => setOpenMore(!openMore)}>
          Delete Board
        </DeleteText>
      </MoreCard>
    </NavContainer>
  );
}

export default Navbar;
