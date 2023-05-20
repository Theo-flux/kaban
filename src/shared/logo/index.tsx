import { useTheme } from 'next-themes';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const LogoFigure = styled.figure`
  width: 100%;
  padding: 1.3rem;
  /* border: 1px solid magenta; */
`;

const NavFigure = styled.figure`
  width: fit-content;
`;

const Img = styled.img`
  width: 60%;
`;

const LogoImg = styled.img`
  transform: scale(0.8);
`;

export const Logo = () => {
  const { theme } = useTheme();

  return (
    <LogoFigure>
      <Img
        src={
          theme == 'dark'
            ? '/images/kanban-dark-logo.svg'
            : '/images/kanban-logo.svg'
        }
        alt="logo-icon"
      />
    </LogoFigure>
  );
};

export const NavLogo = () => {
  const { theme } = useTheme();
  const isFromTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return (
    <NavFigure>
      <LogoImg
        src={
          isFromTablet
            ? theme == 'dark'
              ? '/images/kanban-dark-logo.svg'
              : '/images/kanban-logo.svg'
            : '/images/kanban-icon.svg'
        }
        alt="logo-icon"
      />
    </NavFigure>
  );
};
