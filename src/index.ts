import {
  Throttle,
  Debounce,
  GetType,
  IsValidArray,
  IsValidObject,
  FilterByType,
  GenerateByLength,
  DeepClone,
  WaterUtils,
} from './index.d';

/**
 * 一段时间内执行一次回调函数
 * @param callback 回调函数
 * @param wait 节流时间（unit: ms）
 * @returns void
 */
export const throttle: Throttle = (callback, wait) => {
  let timeoutId: number | undefined = undefined;
  return (...args) => {
    if (timeoutId) {
      return;
    }
    timeoutId = window?.setTimeout(() => {
      callback(...args);
      timeoutId = undefined;
    }, wait);
  };
};

/**
 * 一段时间内若再次执行， 则取消上次回调，最后只会执行一次回调
 * @param callback 回调函数
 * @param wait 防抖时间（unit: ms）
 * @returns void
 */
export const debounce: Debounce = (callback, wait) => {
  let timeoutId: number | undefined = undefined;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
};

/**
 * 获取数据类型
 * @param data 传入的数据
 * @returns boolean
 */
export const getType: GetType = (data) => {
  const typeStr = Object.prototype.toString.call(data);
  return typeStr
    .substring(8, typeStr.length - 1)
    .toLowerCase() as ReturnType<GetType>;
};

/**
 * 校验是否是一个有效的数组
 * 条件：是数组&长度 > 0
 * @param data array
 * @returns boolean
 */
export const isValidArray: IsValidArray = (data) => {
  if (!Array.isArray(data)) return false;
  // 这里若判断length，当new Array(6)时，length是存在的，但数组里均为空属性，不可访问
  return data.length > 0;
};

/**
 * 校验是否是一个有效的对象
 * 条件：是对象&对象至少有一个key
 * @param data object
 * @returns boolean
 */
export const isValidObject: IsValidObject = (data) => {
  if (getType(data) !== 'object') return false;
  return Object.keys(data).length > 0;
};

/**
 * 通过type值过滤出均为type类型的数组集
 * @param data object
 * @member array array
 * @member type string | array
 * @returns array
 */
export const filterByType: FilterByType = (data) => {
  if (getType(data) !== 'object') return [];
  const { array, type } = data;
  if (!isValidArray(array)) return [];
  if (!['string', 'array'].includes(getType(type))) return array;
  return array.filter((item) => type?.includes(getType(item)));
};

/**
 * 将数组切割为指定length的二维数组
 * 可传参过滤掉最后一段长度小于指定length的数组
 * @param data 传入的参数对象
 * @member array 传入的数组
 * @member childLength 切割后的每一个child数组的length
 * @member isCutLast 是否截掉最后一项数组的长度 < childLength的item
 * @returns array
 */
export const generateByLength: GenerateByLength = (data) => {
  if (getType(data) !== 'object') return [];
  const { array, childLength = 2, isCutLast = false } = data;
  if (!isValidArray(array)) return [];
  const tempArr = [];
  const arrLength = isCutLast
    ? Math.floor(array.length / childLength)
    : Math.ceil(array.length / childLength);
  for (let i = 0; i < arrLength; i++) {
    tempArr[i] = array.slice(i * childLength, (i + 1) * childLength);
  }
  return tempArr;
};

/**
 * 深拷贝
 * 说明，当前拷贝对非数组&对象等引用对象是浅拷贝
 * @param data object | array
 * @return object | array
 */
export const deepClone: DeepClone = (data) => {
  const tempData: ReturnType<DeepClone> = Array.isArray(data) ? [] : {};
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      if (['object', 'array'].includes(getType(data[key]))) {
        tempData[key] = deepClone(data[key]);
      } else {
        tempData[key] = data[key];
      }
    }
  }
  return tempData;
};

const waterUtils: WaterUtils = {
  throttle,
  debounce,
  getType,
  isValidArray,
  isValidObject,
  filterByType,
  generateByLength,
  deepClone,
};

export default waterUtils;
