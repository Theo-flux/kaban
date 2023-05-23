import React from 'react';
import {
  InputWrapper,
  InputLabel,
  InputEl,
  InputError,
  TextareaEl,
  SelectEl,
} from './input.css';

interface IinputProps {
  label: string;
  name: string;
  placeholder?: string;
  onChange?: React.MouseEvent<HTMLInputElement, MouseEvent>;
  error?: string;
}

interface ISelectProps extends IinputProps {
  options: Array<string>;
}

export const TextInput = ({
  label,
  name,
  placeholder,
  onChange,
  error,
}: IinputProps) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputEl
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={() => onChange}
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
}: IinputProps) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <TextareaEl
        name={name}
        placeholder={placeholder}
        onChange={() => onChange}
      />
      {error && <InputError>{error}</InputError>}
    </InputWrapper>
  );
};

export const SelectInput = ({
  label,
  name,
  placeholder,
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
