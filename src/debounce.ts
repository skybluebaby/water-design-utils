import { Debounce } from './index.d';

/**
 * 一段时间内若再次执行， 则取消上次回调，最后只会执行一次回调
 * @param callback 回调函数
 * @param wait 防抖时间（unit: ms）
 * @returns void
 */
const debounce: Debounce = (callback, wait) => {
  let timeoutId: number | undefined = undefined;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
};

export default debounce;
