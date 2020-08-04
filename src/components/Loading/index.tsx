import React, { SFC } from 'react';
import './index.less';
import { Size } from '@/types';

const preClassName = 'doo-loading';

interface LoadingProps {
  color: string;
  hollow?: boolean;
}

type Loading = LoadingProps & Size

const Loading: SFC<Loading> = ({
  color = '#000',
  hollow = false,
}) => (
  <div
    className={`${preClassName} ${preClassName}-small`}
    style={{
      border: `2px solid ${color}`,
      borderBottomColor: hollow ? 'transparent' : '#FFF',
    }}
  >
  </div>
);

export default Loading;
