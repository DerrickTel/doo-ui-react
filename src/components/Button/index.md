---
nav:
  path: /components
---

## Button

```tsx
import React from 'react';
import { Button, Divider } from 'doo-ui-react';

export default () => (
  <>
    <Button>我是按钮</Button>
    <Divider />
    <Button type="primary" loading>我是按钮</Button>
    <Divider />
    <Button disabled>我是按钮</Button>
  </>
);
```

