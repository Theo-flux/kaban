import styled from 'styled-components';
import { StyledHeadingMD } from '../typography';
import { device, transition } from '@/utils';

export const ButtonContainer = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 100px;
  padding: 0.5rem 1rem;
  background-color: var(--blue-marguerite);
  color: white;
  ${transition}

  &:hover {
    background-color: var(--melrose);
  }
`;

export const ButtonText = styled(StyledHeadingMD)`
  display: none;
  margin-left: 0.35rem;
  color: white;

  @media ${device.md} {
    display: block;
  }
`;
