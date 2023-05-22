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
            <StyledMoreIcon />
          </NavOther>
        </NavInner>
      </NavWrapper>
    </NavContainer>
  );
}

export default Navbar;
