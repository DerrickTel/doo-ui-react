import React from 'react';
import './index.less';
import { Size } from '@/types';

interface DividerProps {
  type?: 'horizontal' | 'vertical';
}

type Divider = DividerProps & Size

const Divider: React.SFC<Divider> = ({
  type = 'vertical',
}) => {

  const preClassName = 'doo-divider';

  return (
    <div className={`${preClassName} ${preClassName}-${type}`}>
    </div>
  );
};

export default Divider;
