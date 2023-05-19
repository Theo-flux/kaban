import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const LogoFigure = styled.div`
  width: 100%;
  padding: 1.3rem;
  /* border: 1px solid magenta; */
`;

const NavFigure = styled.div`
  width: fit-content;
`;

const Img = styled.img`
  width: 60%;
`;

const LogoImg = styled.img`
  transform: scale(0.8);
`;

export const Logo = () => {
  return (
    <LogoFigure>
      <Img src={'/images/kanban-logo.svg'} alt="logo-icon" />
    </LogoFigure>
  );
};

export const NavLogo = () => {
  const isFromTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return (
    <NavFigure>
      <LogoImg
        src={
          isFromTablet ? '/images/kanban-logo.svg' : '/images/kanban-icon.svg'
        }
        alt="logo-icon"
      />
    </NavFigure>
  );
};
