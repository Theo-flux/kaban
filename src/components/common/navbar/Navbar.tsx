import React from 'react';
import {
  NavContainer,
  NavWrapper,
  NavLogoWrapper,
  NavInner,
} from './navbar.css';
import { NavLogo, Section } from '@/shared';

interface INav {
  showsidebar: Boolean;
}

function Navbar({ showsidebar }: INav) {
  return (
    <NavContainer>
      <NavWrapper>
        {showsidebar == false && (
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
