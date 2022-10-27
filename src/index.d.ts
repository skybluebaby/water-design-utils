export type Throttle = (
  callback: (...arg: any[]) => void,
  wait: number
) => (...arg: any[]) => void;

export type Debounce = Throttle;

type TypeOfData =
  | 'number'
  | 'string'
  | 'boolean'
  | 'undefined'
  | 'null'
  | 'symbol'
  | 'bigint'
  | 'array'
  | 'object'
  | 'function'
  | 'set'
  | 'map';

export type GetType = (data: any) => TypeOfData;

interface BooleanFunc<T> {
  (data: T): boolean;
}

export type IsValidArray = BooleanFunc<any>;
export type IsValidObject = BooleanFunc<any>;

export type FilterByType = <T>(data: {
  array: T[];
  type: TypeOfData | TypeOfData[];
}) => T[];

export type GenerateByLength = <T>(data: {
  array: T[];
  childLength?: number;
  isCutLast?: boolean;
}) => T[][];

export type Random = (min: number, max: number) => number;

export type DeepClone = (data: Record<any, any>) => Record<any, any>;

export interface WaterUtils {
  throttle: Throttle;
  debounce: Debounce;
  getType: GetType;
  isValidArray: IsValidArray;
  isValidObject: IsValidObject;
  filterByType: FilterByType;
  generateByLength: GenerateByLength;
  deepClone: DeepClone;
  random: Random;
}

declare const throttle: Throttle;
declare const debounce: Debounce;
declare const getType: GetType;
declare const isValidArray: IsValidArray;
declare const isValidObject: IsValidObject;
declare const filterByType: FilterByType;
declare const generateByLength: GenerateByLength;
declare const deepClone: DeepClone;
declare const random: Random;
declare const waterUtils: WaterUtils;

export {
  throttle,
  debounce,
  getType,
  isValidArray,
  isValidObject,
  filterByType,
  generateByLength,
  deepClone,
  random,
};

export default waterUtils;
