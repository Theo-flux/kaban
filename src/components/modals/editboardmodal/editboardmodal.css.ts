import styled from 'styled-components';

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

export const Text = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: var(--input-label);
  margin-bottom: 0.7rem;
`;
