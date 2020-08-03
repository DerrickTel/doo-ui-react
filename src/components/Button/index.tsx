import React, { useRef, MouseEvent } from 'react';
import classNames from 'classnames';
import Loading from '../Loading';
import './index.less';

interface ButtonProps {
  loading?: boolean;
  type?: 'primary' | 'default';
  disabled?: boolean;
}

type Button = ButtonProps & Size

const Button: React.SFC<Button> = ({
  children,
  loading,
  type = 'default',
  disabled = false,
}) => {

  const preClassName = 'doo-btn';

  const btn = useRef<HTMLButtonElement>(null);

  const content = (
    <>
      {children}
      {loading && <Loading color={type === 'default' ? '#999' : '#FFF'} />}
    </>
  );

  const showRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const width = target.offsetWidth;
    const height = target.offsetHeight;
    const side = width > height ? width : height;
    const x = (e.clientX - target.offsetLeft) - side / 2;
    const y = (e.clientY - target.offsetTop) - side / 2;
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
  };

  return (
    <button
      className={classNames(
        `${preClassName}`,
        `${preClassName}-${type}`,
        {
          [`${preClassName}-disabled`]: disabled,
        },
      )}
      disabled={disabled}
      ref={btn}
      type='button'
      onClick={showRipple}
    >
      {content}
    </button>
  );
};

export default Button;
