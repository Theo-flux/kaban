import React from 'react';
import {
  NavContainer,
  NavWrapper,
  NavLogoWrapper,
  NavInner,
} from './navbar.css';
import { NavLogo, Section } from '@/shared';

interface INav {
  showSidebar: Boolean;
}

function Navbar({ showSidebar }: INav) {
  return (
    <NavContainer>
      <NavWrapper>
        {showSidebar == false && (
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
