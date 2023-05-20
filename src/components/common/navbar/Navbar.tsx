import { useMediaQuery } from 'react-responsive';
import {
  NavContainer,
  NavWrapper,
  NavLogoWrapper,
  NavInner,
  NavTitle,
  NavArrow,
} from './navbar.css';
import { NavLogo } from '@/shared';

interface INav {
  showsidebar: Boolean;
  openmobilenav: Boolean;
  handleSetopenmobilenav: () => void;
}

function Navbar({ showsidebar, openmobilenav, handleSetopenmobilenav }: INav) {
  const isFromTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <NavContainer>
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
        <NavInner onClick={() => handleSetopenmobilenav()}>
          <NavTitle>Navbar</NavTitle>
          <NavArrow openmobilenav={openmobilenav}/>
        </NavInner>
      </NavWrapper>
    </NavContainer>
  );
}

export default Navbar;
