## 综述

集成 javascript 工具函数

## 使用

```ts
import waterUtils, { deepClone } from 'water-design-utils';

const arr = [1, '2', {}, []];
const obj = { name: '张三', age: '88' };

const filterArr = waterUtils.filterByType({
  array: arr,
  type: ['number', 'object'],
});
console.log(filterArr); // [1, {}]
console.log(deepClone(obj) === obj); // false
```

## API

| 名称       | 说明                                                 | 入参                       | 出参 | 版本 |
| :--------- | :--------------------------------------------------- | :------------------------- | :--- | :--- |
| `throttle` | 节流函数，在固定时间内只会执行一次函数               | `(callback, wait) => void` | -    |      |
| `debounce` | 防抖函数，在固定时间内连续触发只会在最后执行一次函数 | `(callback, wait) => void` | -    |      |
