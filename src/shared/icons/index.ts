import styled from 'styled-components';
import { RiAddFill } from 'react-icons/ri';

type TStyledPlusIcon = {
  btnType?: 'primary' | 'secondary' | 'destructive';
};

export const StyledPlusIcon = styled(RiAddFill)<TStyledPlusIcon>`
  color: ${props =>
    props.btnType === 'primary'
      ? 'var(--white)'
      : props.btnType === 'secondary'
      ? 'var(--blue-marguerite)'
      : 'var(--white)'};
`;
