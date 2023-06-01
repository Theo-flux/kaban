import styled from 'styled-components';
import { transition } from '@/utils';
import { StyledBodyMD, StyledHeadingMD, StyledHeadingXL } from '@/shared';

type TTaskProps = {
  index: string;
  isDraggableIndex: string;
  hoverIndex: string;
};

type TSeparatorProps = {
  active: boolean;
};

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

export const CollectionStatus = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const StatusIndicator = styled.span`
  position: absolute;
  left: 0%;
  right: 85.29%;
  top: 0%;
  bottom: 0%;
  border-radius: 15px;
  width: 15px;
  height: 15px;
  background: #49c4e5;
`;

export const StatusText = styled(StyledBodyMD)`
  margin-left: 1.8rem;
  line-height: 15px;
  letter-spacing: 2.4px;
  color: var(--regeant-gray);
`;

export const Tasks = styled.div`
  margin-top: 1rem;
  ${transition}
`;

export const TaskPod = styled.div<TTaskProps>`
  cursor: move;
  background-color: var(--side);
  width: 280px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
  margin-bottom: 1rem;
  padding: 1.5rem 1rem;
  opacity: ${({ index, isDraggableIndex }) =>
    isDraggableIndex == index ? 0.2 : 1};
  border: ${({ index, hoverIndex }) =>
    hoverIndex == index ? `1px dashed var(--blue-marguerite)` : `none`};
  height: auto;
  ${transition}
`;

export const TaskTitle = styled(StyledHeadingMD)`
  color: var(--text);
  margin-bottom: 0.5rem;
`;

export const SubTasks = styled(StyledBodyMD)`
  cursor: pointer;
  color: var(--regeant-gray);
`;

export const EndHandler = styled.div``;

export const Separator = styled.div<TSeparatorProps>`
  height: ${props => (props.active ? `88px` : `0px`)};
  margin-bottom: ${props => (props.active ? `1rem` : `0rem`)};
  border-radius: 8px;
  border: ${props =>
    props.active ? `1px dashed var(--blue-marguerite)` : `none`};

  ${transition}
`;
