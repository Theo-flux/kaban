import styled from 'styled-components';
import { device, transition } from '@/utils';
import { StyledBodyL, StyledHeadingL } from '@/shared';

type TDeleteBoardCardProps = {
  open: boolean;
};


export const StyledDeleteTitle = styled(StyledHeadingL)`
  color: var(--mandy);
  margin-bottom: 1rem;
`;

export const StyledDeleteText = styled(StyledBodyL)`
  color: var(--regeant-gray);
`;

export const BtnWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & button {
    width: 100%;
  }

  & button:first-of-type {
    margin-bottom: 1rem;
  }

  @media ${device.md} {
    flex-direction: row;
    justify-content: space-between;

    & button {
      width: 48%;
    }

    & button:first-of-type {
    margin-bottom: 0rem;
  }
  }
`;
