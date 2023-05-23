import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const InputEl = styled.input`
  width: 100%;
  border: 1px solid var(--input-border);
  background-color: var(--side);
  padding: 0.5rem;
  border-radius: 4px;
  &::placeholder {
    color: var(--input-placeholder);
  }

  &:focus {
    outline: 1px solid var(--blue-marguerite);
  }
`;

export const TextareaEl = styled.textarea`
  width: 100%;
  border: 1px solid var(--input-border);
  background-color: var(--side);
  padding: 0.5rem;
  border-radius: 4px;
  &::placeholder {
    color: var(--input-placeholder);
  }

  &:focus {
    outline: 1px solid var(--blue-marguerite);
  }
  resize: none;
  height: 112px;
`;

export const SelectEl = styled.select`
  width: 100%;
  border: 1px solid var(--input-border);
  background-color: var(--side);
  padding: 0.5rem;
  border-radius: 4px;
  &::placeholder {
    color: var(--input-placeholder);
  }

  &:focus {
    outline: 1px solid var(--blue-marguerite);
  }
`;

export const InputLabel = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: var(--input-label);
  margin-bottom: 0.7rem;
`;

export const InputError = styled.small``;
