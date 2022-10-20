import { Throttle } from './index.d';

/**
 * 一段时间内执行一次回调函数
 * @param callback 回调函数
 * @param wait 节流时间（unit: ms）
 * @returns void
 */
const throttle: Throttle = (callback, wait) => {
  let timeoutId: number | undefined = undefined;
  return (...args) => {
    if (timeoutId) {
      return;
    }
    timeoutId = window.setTimeout(() => {
      callback(...args);
      timeoutId = undefined;
    }, wait);
  };
};
export default throttle;
