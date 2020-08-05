import React, { SFC } from 'react';
import './index.less';
import { Size } from '@/types';

const preClassName = 'doo-loading';

interface LoadingProps {
  color: string;
  hollow?: boolean;
}

type Loading = LoadingProps & Size;

const Loading: SFC<Loading> = ({
  color = '#000',
  hollow = false,
  size = 'middle',
}) => (
  <div
    className={`${preClassName} ${preClassName}-${size}`}
    style={{
      border: `2px solid ${hollow ? color : '#FFF'}`,
      borderBottomColor: hollow ? '#FFF' : 'transparent',
    }}
  ></div>
);

export default Loading;
