// 节流
export type Throttle = (
  callback: (...arg: unknown[]) => void,
  wait: number
) => void;
declare const throttle: Throttle;

// 防抖
export type Debounce = Throttle;
