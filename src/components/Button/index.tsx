import React, { useRef, MouseEvent } from 'react';
import classNames from 'classnames';
import Loading from '../Loading';
import './index.less';
import { COLOR, Size } from '../../types';

interface ButtonProps {
  loading?: boolean;
  type?: keyof typeof COLOR;
  disabled?: boolean;
  hollow?: boolean;
  onClick?: (event: MouseEvent) => void;
}

type Button = ButtonProps & Size;

const Button: React.FC<Button> = ({
  children,
  loading,
  type = 'default',
  disabled = false,
  hollow = false,
  size = 'middle',
  onClick,
}) => {
  const preClassName = 'doo-btn';

  const btn = useRef<HTMLButtonElement>(null);

  const content = (
    <>
      {children}
      {loading && <Loading color={COLOR[type]} hollow={hollow} size={size} />}
    </>
  );

  const showRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const width = target.offsetWidth;
    const height = target.offsetHeight;
    const side = width > height ? width : height;
    const x = e.clientX - target.offsetLeft - side / 2;
    const y = e.clientY - target.offsetTop - side / 2;
    const rippleEffect = document.createElement('span');
    Object.assign(rippleEffect.style, {
      height: `${side}px`,
      width: `${side}px`,
      left: `${x}px`,
      top: `${y}px`,
    });

    rippleEffect.className = `${preClassName}-ripple `;

    btn.current!.appendChild(rippleEffect);
    setTimeout(() => {
      rippleEffect.remove();
    }, 300);
    onClick?.(e);
  };

  return (
    <button
      className={classNames(
        `${preClassName}`,
        `${preClassName}-${type}`,
        `${preClassName}-${size}`,
        {
          [`${preClassName}-disabled`]: disabled,
          [`${preClassName}-hollow`]: hollow,
        },
      )}
      disabled={disabled}
      ref={btn}
      type="button"
      onClick={showRipple}
    >
      {content}
    </button>
  );
};
export default Button;
