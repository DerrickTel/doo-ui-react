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
    <Input type="text" />
    <Divider type="horizontal" />
    <Input type="password" />
    <Divider type="horizontal" />
    <Input type="range" />
    <Divider type="horizontal" />
    <Input type="date" />
    <Divider type="horizontal" />
    <Input type="number" />
    <Divider type="horizontal" />
    <Input type="color" />
    <Divider type="horizontal" />
    <Input type="email" />
  </div>
);
```

### API
