import React, { SFC } from 'react';
import './index.less';

const preClassName = 'doo-loading';

interface LoadingProps {
  color: string;
}

type Loading = LoadingProps & Size

const Loading: SFC<Loading> = () => (
  <div className={`${preClassName} ${preClassName}-small`}>
  </div>
);

export default Loading;
