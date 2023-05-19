import React from 'react';
import styled from 'styled-components';
import { ImEye } from 'react-icons/im';
import { transition } from '@/utils';

type TShowProps = {
  showsidebar: Boolean;
};

const ShowTagContainer = styled.div<TShowProps>`
  cursor: pointer;
  position: absolute;
  left: ${props => (props.showsidebar ? `-400px` : `0px`)};
  z-index: 5;
  bottom: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blue-marguerite);
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  ${transition}
`;

const StyledImEye = styled(ImEye)`
  color: var(--white);
  width: 16px;
`;

interface IShowTag {
  showsidebar: Boolean;
  handleSetshowsidebar: () => void;
}

function ShowTag({ showsidebar, handleSetshowsidebar }: IShowTag) {
  return (
    <ShowTagContainer showsidebar={showsidebar} onClick={handleSetshowsidebar}>
      <StyledImEye />
    </ShowTagContainer>
  );
}

export default ShowTag;
