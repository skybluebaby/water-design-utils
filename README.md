## 综述

集成 javascript 工具函数

## 使用

```ts
import waterUtils, { deepClone， generateByLength } from 'water-design-utils';

const arr = [1, '2', {}, []];
const obj = { name: '张三', age: '88' };
const otherArr = [1, 2, 3, 4, 5, 6, 7]

const filterArr = waterUtils.filterByType({
  array: arr,
  type: ['number', 'object'],
});
console.log(filterArr); // [1, {}]
console.log(deepClone(obj) === obj); // false
const generateArr = generateByLength({ array: otherArr })
console.log(generateArr) // [[1, 2], [3, 4], [5. 6], [7]]

```

## API

| 名称               | 说明                                                                               | 版本   |
| :----------------- | :--------------------------------------------------------------------------------- | :----- |
| `throttle`         | 节流函数，在固定时间内只会执行一次函数                                             | ^1.0.0 |
| `debounce`         | 防抖函数，在固定时间内连续触发只会在最后执行一次函数                               | ^1.0.0 |
| `getType`          | 获取数据类型，可判断对象                                                           | ^1.0.0 |
| `isValidArray`     | 判断是否是一个有效（是数组&长度不为 0）的数组                                      | ^1.0.0 |
| `isValidObject`    | 判断是否是一个有效（是对象&至少有一个属性）的对象                                  | ^1.0.0 |
| `filterByType`     | 通过传入一个数组和相应的筛选子项的类型，可过滤出符合条件的数组                     | ^1.0.0 |
| `generateByLength` | 将数组切割为指定 length 的二维数组，可传参过滤掉最后一段长度小于指定 length 的数组 | ^1.0.0 |
| `deepClone`        | 对传入的对象和数组进行深拷贝，不支持包含函数等非对象和数组的复杂数据类型的拷贝     | ^1.0.0 |
| `random`           | 获取 min <= x < max 之间的随机整数                                                 | ^1.0.2 |
