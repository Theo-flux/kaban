import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  background-color: var(--white);
  border-bottom: 1px solid var(--link-water);
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavLogoWrapper = styled.div`
  padding: 1.5rem 1rem;
  border-right: 1px solid var(--link-water);
`;

export const NavInner = styled.div`
  padding: 1.5rem 1rem;
`;
