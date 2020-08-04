---
nav:
  path: /components
---

## Button

### 示例

```tsx
import React from 'react';
import { Button, Divider } from 'doo-ui-react';

export default () => (
  <>
    <h1>基本使用</h1>
    <Button>我是按钮</Button>
    <Divider />
    <Button type="primary">我是按钮</Button>
    <Divider />
    <Button type="warning">我是按钮</Button>
    <Divider />
    <Button type="error">我是按钮</Button>
    <Divider />
    <Button type="success">我是按钮</Button>
    <Divider />
    <Button type="primary" loading>我是按钮</Button>
    <Divider type="horizontal" />
    <h1>空心</h1>
    <Button type="default" hollow>我是按钮</Button>
    <Divider />
    <Button type="primary" hollow>我是按钮</Button>
    <Divider />
    <Button type="warning" hollow>我是按钮</Button>
    <Divider />
    <Button type="error" hollow>我是按钮</Button>
    <Divider />
    <Button type="success" hollow>我是按钮</Button>
    <Divider />
    <Button type="primary" hollow loading>我是按钮</Button>
    <Divider type="horizontal" />
    <h1>禁用</h1>
    <Button type="default" disabled>我是按钮</Button>
    <Divider />
    <Button type="primary" disabled hollow>我是按钮</Button>
    <Divider />
    <Button type="warning" disabled hollow>我是按钮</Button>
    <Divider />
    <Button type="error" disabled hollow>我是按钮</Button>
    <Divider />
    <Button type="success" disabled hollow>我是按钮</Button>
    <Divider />
    <Button type="primary" disabled hollow loading>我是按钮</Button>
    <Divider />
    <Button type="primary" disabled>我是按钮</Button>
    <Divider />
    <Button type="warning" disabled>我是按钮</Button>
    <Divider />
    <Button type="error" disabled>我是按钮</Button>
    <Divider />
    <Button type="success" disabled>我是按钮</Button>
    <Divider />
    <Button type="primary" disabled loading>我是按钮</Button>
  </>
);
```

### API


| 属性     | 说明     | 类型                                                | 默认值  |
| -------- | -------- | --------------------------------------------------- | ------- |
| loading  | 加载状态 | *boolean*                                           | false   |
| type     | 类型     | 'primary'\|'warning'\|'error'\|'success'\|'default' | default |
| disabled | 禁用     | *boolean*                                           | false   |
| hollow   | 空心     | *boolean*                                           | false   |

