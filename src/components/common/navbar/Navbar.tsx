import { useMediaQuery } from 'react-responsive';
import {
  NavContainer,
  NavWrapper,
  NavLogoWrapper,
  NavInner,
} from './navbar.css';
import { NavLogo } from '@/shared';

interface INav {
  showsidebar: Boolean;
}

function Navbar({ showsidebar }: INav) {
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
        <NavInner>Navbar</NavInner>
      </NavWrapper>
    </NavContainer>
  );
}

export default Navbar;
