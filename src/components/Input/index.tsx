import React, { useState, ChangeEvent, ReactNode } from 'react';
import classNames from 'classnames';
import './index.less';
import { Size } from '@/types';

type I = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'>;

interface InputProps extends I {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readonly?: boolean;
  value?: string | number;
  defaultValue?: string | number;
  disabled?: boolean;
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
}

type Input = InputProps & Size;

const Input: React.FC<Input> = ({
  onChange,
  placeholder = '请输入',
  readonly = false,
  defaultValue,
  value,
  size,
  disabled,
  addonBefore,
  addonAfter,
  ...rest
}) => {
  const preClassName = 'doo-input';

  const [inputValue, setInputValue] = useState(value || defaultValue || '');

  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const input = (
    <input
      {...rest}
      className={classNames(`${preClassName}`, {
        [`${preClassName}-disabled`]: disabled,
      })}
      disabled={disabled}
      placeholder={placeholder}
      readOnly={readonly}
      value={inputValue}
      onChange={_onChange}
    />
  );

  if (addonBefore || addonAfter) {
    return (
      <span className={classNames(`${preClassName}-group`)}>
        <span className={`${preClassName}-group-addon`}>{addonBefore}</span>
        {input}
        <span className={`${preClassName}-group-addon`}>{addonAfter}</span>
      </span>
    );
  }

  return input;
};

export default Input;
