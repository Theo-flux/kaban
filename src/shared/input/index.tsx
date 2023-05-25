import React from 'react';
import {
  InputWrapper,
  DeletableInputWrapper,
  InputLabel,
  InputEl,
  InputError,
  TextareaEl,
  SelectEl,
  StyledCloseIcon,
} from './input.css';

interface IinputProps {
  label: string;
  name: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void ;
  error?: string;
}

interface ITnputProps {
  label: string;
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void ;
  error?: string;
}

interface ISelectProps extends IinputProps {
  options: Array<string>;
}

interface IDeletableInputProps {
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const TextInput = ({
  label,
  name,
  placeholder,
  onChange,
  error,
}: ITnputProps) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputEl
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
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
        onChange={(e) => onChange(e)}
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
          onChange={(e) => onChange(e)}
        />
        <StyledCloseIcon />
      </DeletableInputWrapper>
      {error && <InputError>{error}</InputError>}
    </InputWrapper>
  );
};
