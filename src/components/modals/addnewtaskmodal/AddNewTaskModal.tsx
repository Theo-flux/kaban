import React, { useReducer, useState } from 'react';
import {
  ModalContainer,
  ModalBackdrop,
  ModalCard,
  ModalWrapper,
  ModalTitle,
  TextInput,
  TextAreaInput,
  SelectInput,
  ButtonIcon,
  Button,
  StyledPlusIcon,
  DeletableInput,
} from '@/shared';
import { Group } from './addnewtaskmodal.css';
import { useAppSelector } from '@/app/hooks';
import { TTask } from '../../../types';

interface IAddNewTaskModalProps {
  open: boolean;
  handleDispatchAddTaskModal: () => void;
}

function AddNewTaskModal({
  open,
  handleDispatchAddTaskModal,
}: IAddNewTaskModalProps) {
  const { allStatus } = useAppSelector(state => state.allStatus);
  const { activeboard } = useAppSelector(state => state.board);
  const [subtaskArr, setSubtaskArr] = useState<Array<string>>([]);

  const formInitialState: TTask = {
    title: '',
    description: '',
    status: '',
    subtasks: [{ title: '', isCompleted: false }],
    index: 0,
  };

  type TFormActions = {
    type: string;
    payload: string;
    subtaskPayload: {
      title: string;
      isCompleted: boolean;
    };
  };

  type TFormsubtaskAction = {
    type: string;
    payload: {
      title: string;
      isCompleted: boolean;
    };
  };

  const formReducers = (state: TTask, action: TFormActions): TTask => {
    const { type, payload, subtaskPayload } = action;
    switch (type) {
      case 'title':
        return {
          ...state,
          title: payload,
        };

      case 'description':
        return {
          ...state,
          description: payload,
        };

      case 'status':
        return {
          ...state,
          status: payload,
        };

      case 'subtask':
        return {
          ...state,
          subtasks: [...state.subtasks, subtaskPayload],
        };
      default:
        return state;
    }
  };

  const [formData, dispatchFormAction] = useReducer(
    formReducers,
    formInitialState
  );

  const handleOnChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    if (name === 'status') {
      let selectEl = document.getElementById('status');
      selectEl?.setAttribute('value', value);
      return dispatchFormAction({
        type: name,
        payload: value,
        subtaskPayload: { title: '', isCompleted: false },
      });
    } else {
      return dispatchFormAction({
        type: name,
        payload: value,
        subtaskPayload: { title: '', isCompleted: false },
      });
    }
  };

  console.log(formData);

  return (
    <ModalContainer open={open}>
      <ModalCard open={open}>
        <ModalWrapper>
          <ModalTitle>Add New Task</ModalTitle>
          <Group>
            <TextInput
              label="Title"
              name="title"
              placeholder="e.g Take coffee break"
              onChange={e => handleOnChange(e)}
            />

            <TextAreaInput
              label="Description"
              name="description"
              placeholder="e.g. It’s always good to take a break. This 15 minute break will 
              recharge the batteries a little."
              onChange={e => handleOnChange(e)}
            />
          </Group>

          <Group>
            {subtaskArr.map((task, index) => {
              return (
                <DeletableInput
                  key={index}
                  name={`${activeboard}-subtask-${index}`}
                  onChange={e => handleOnChange(e)}
                />
              );
            })}
            <ButtonIcon
              leftIcon={<StyledPlusIcon btnType="secondary" />}
              text="Add New Subtask"
              hideTextOnMobile={false}
              btnType="secondary"
              
            />
          </Group>

          <Group>
            <SelectInput
              label="Status"
              name="status"
              options={allStatus || []}
              onChange={e => handleOnChange(e)}
            />
            <Button text="Create Task" btnType="primary" />
          </Group>
        </ModalWrapper>
      </ModalCard>
      <ModalBackdrop open={open} onClick={() => handleDispatchAddTaskModal()} />
    </ModalContainer>
  );
}

export default AddNewTaskModal;
