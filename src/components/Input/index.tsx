import React, { useState, ChangeEvent } from 'react';
import classNames from 'classnames';
import './index.less';
import { Size } from '@/types';

type I = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

interface InputProps
  extends I {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readonly?: boolean;
  value?: string | number;
  defaultValue?: string | number;
}

type Input = InputProps & Size;

const Input: React.FC<Input> = ({
  onChange,
  placeholder = '请输入',
  readonly = false,
  type,
  defaultValue,
  value,
}) => {
  const preClassName = 'doo-input';

  const [inputValue, setInputValue] = useState(value || defaultValue || '');

  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  return (
    <>
      <input
        className={classNames(
          `${preClassName}`,
        )}
        placeholder={placeholder}
        readOnly={readonly}
        type={type}
        value={inputValue}
        onChange={_onChange}
      />
    </>
  );
};

export default Input;
