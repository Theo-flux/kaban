import styled from 'styled-components';
import { FiMoreVertical } from 'react-icons/fi';
import { transition } from '@/utils';
import { StyledBodyL, StyledHeadingL, StyledBodyMD } from '@/shared';

type TMoreCard = {
  openmore: boolean;
};

type TModalTitle = {
  color?: string;
};

export const Group = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0rem;
  }

  & button {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledMoreIcon = styled(FiMoreVertical)`
  cursor: pointer;
  margin-left: 0.5rem;
`;

export const MoreCard = styled.div<TMoreCard>`
  position: absolute;
  top: 60px;
  right: 20px;
  width: 190px;
  padding: 0.75rem 1rem;
  background-color: var(--body);
  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
  border-radius: 8px;
  transform: ${props =>
    props.openmore ? 'translateY(0px)' : 'translateY(-20px)'};
  visibility: ${props => (props.openmore ? 'visible' : 'hidden')};
  opacity: ${props => (props.openmore ? '1' : '0')};
  ${transition}
`;

export const EditText = styled(StyledBodyL)`
  color: var(--text);
  cursor: pointer;
  margin-bottom: 0.5rem;
`;

export const DeleteText = styled(StyledBodyL)`
  cursor: pointer;
  color: var(--mandy);
`;

export const ModalTitle = styled(StyledHeadingL)<TModalTitle>`
  color: ${props => (props.color ? `${props.color}` : `var(--text)`)};
  width: 90%;
`;

export const ModalSubTitle = styled(StyledBodyMD)`
  color: var(--text);
  margin-bottom: 1rem;
`;
