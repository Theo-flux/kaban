import React from 'react';
import { Loader } from '@mantine/core';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLoader = () => {
  return (
    <LoadingContainer>
      <Loader color="violet" variant="dots" />
    </LoadingContainer>
  );
};
