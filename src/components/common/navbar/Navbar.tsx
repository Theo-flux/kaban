import { useMediaQuery } from 'react-responsive';
import { Button } from '@mantine/core';
import {
  NavContainer,
  NavWrapper,
  NavLogoWrapper,
  NavInner,
  NavTitle,
  NavArrow,
  NavActiveBoard,
  NavOther,
} from './navbar.css';
import { NavLogo } from '@/shared';

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
            <NavArrow openmobilenav={openmobilenav} />
          </NavActiveBoard>

          <NavOther>
            <Button radius="xl" color="violet">
              Add New Task
            </Button>
          </NavOther>
        </NavInner>
      </NavWrapper>
    </NavContainer>
  );
}

export default Navbar;
