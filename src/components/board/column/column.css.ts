import styled from 'styled-components';
import { transition } from '@/utils';
import { StyledHeadingXL } from '@/shared';

export const StyledNewColumnText = styled(StyledHeadingXL)`
  color: var(--regeant-gray);
`;

export const ColumnContainer = styled.div`
  flex: 0 0 280px;
`;

export const NewColumnContainer = styled.div`
  cursor: pointer;
  flex: 0 0 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin: 2rem 0rem;
  background: var(--new-column);
  border-radius: 6px;
  ${transition}

  &:hover ${StyledNewColumnText} {
    color: var(--blue-marguerite);
  }
`;
