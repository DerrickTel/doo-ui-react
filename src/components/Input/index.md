---
group:
  title: Input 输入框
nav:
  path: /components
---

### 示例


```tsx
import React from 'react';
import { Input, Divider } from 'doo-ui-react';

export default () => (
  <div style={{width:'400px'}}>
    <h1>基本使用</h1>
    <Input />
    <Divider type="horizontal" />
    <Input type="password" />
    <Divider type="horizontal" />
    <Input disabled />
    <Divider type="horizontal" />
    <h1>前置/后置标签</h1>
    <Input addonBefore={'https://'} addonAfter={'.com'} />
    <Divider type="horizontal" />
    <h1>可清空</h1>
    <Input allowClear />
  </div>
);
```

### API
