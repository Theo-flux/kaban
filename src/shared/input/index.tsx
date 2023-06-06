import React from 'react';
import { Checkbox } from '@mantine/core';
import {
  InputWrapper,
  CheckInputWrapper,
  CheckBoxLabelText,
  DeletableInputWrapper,
  InputLabel,
  InputEl,
  InputError,
  TextareaEl,
  SelectEl,
  StyledCloseIcon,
} from './input.css';

interface IInputProps {
  label: string;
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

interface ITextareatProps extends Omit<IInputProps, 'onChange'> {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

interface ISelectProps extends IInputProps {
  options: Array<string>;
}

interface IDeletableInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

interface ICheckInputProps {
  label: string;
  checked: boolean;
  index: number | 0;
  handleOnclick: (arg: number, isCompleted: boolean) => void;
}

export const TextInput = ({
  label,
  name,
  placeholder,
  onChange,
  error,
}: IInputProps) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputEl
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={e => onChange(e)}
      />
      {error && <InputError>{error}</InputError>}
    </InputWrapper>
  );
};

export const TextAreaInput = ({
  label,
  name,
  placeholder,
  onChange,
  error,
}: ITextareatProps) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <TextareaEl
        name={name}
        placeholder={placeholder}
        onChange={e => onChange(e)}
      />
      {error && <InputError>{error}</InputError>}
    </InputWrapper>
  );
};

export const SelectInput = ({
  label,
  name,
  onChange,
  options,
}: ISelectProps) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <SelectEl name={name} id={name} onChange={() => onChange}>
        {options.map((el, index) => {
          return (
            <option key={index} value={el}>
              {el}
            </option>
          );
        })}
      </SelectEl>
    </InputWrapper>
  );
};

export const DeletableInput = ({
  name,
  value,
  onChange,
  error,
}: IDeletableInputProps) => {
  return (
    <InputWrapper>
      <DeletableInputWrapper>
        <InputEl
          type="text"
          name={name}
          value={value}
          onChange={e => onChange(e)}
        />
        <StyledCloseIcon />
      </DeletableInputWrapper>
      {error && <InputError>{error}</InputError>}
    </InputWrapper>
  );
};

export const CheckInput = ({
  label,
  checked,
  index,
  handleOnclick,
}: ICheckInputProps) => {
  return (
    <CheckInputWrapper onClick={() => handleOnclick(index, checked)}>
      <Checkbox
        color="violet"
        size="xs"
        checked={checked}
        label={<CheckBoxLabelText checked={checked}>{label}</CheckBoxLabelText>}
      />
    </CheckInputWrapper>
  );
};
