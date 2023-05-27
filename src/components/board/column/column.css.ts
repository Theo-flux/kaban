import styled from 'styled-components';
import { transition } from '@/utils';
import { StyledHeadingXL } from '@/shared';

// Column Styling
export const StyledNewColumnText = styled(StyledHeadingXL)`
  color: var(--regeant-gray);
`;

export const NewColumnContainer = styled.div`
  cursor: pointer;
  width: 280px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--new-column);
  border-radius: 6px;
  ${transition}

  &:hover ${StyledNewColumnText} {
    color: var(--blue-marguerite);
  }
`;
