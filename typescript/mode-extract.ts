/* eslint-disable no-unused-vars */
interface SayHello {
  (name: string): string;
}

const func: SayHello = (name: string) => {
  return name;
};

interface IPerson {
  name: string;
}

interface PersonConstructor {
  new (): void;
}

interface PersonParams {
  name: string;
}

class Person implements PersonParams {
  name: string;
  constructor (name: string) {
    this.name = name;
  }
}

function Person1 (Ct: PersonConstructor) {
  return new Ct();
}

// mode extract
function parseStr (str: `#${string}`): void {}
parseStr('#aaa');

// infer
type GetValue<P> = P extends Promise<infer Value> ? Value : never;
// type GetValueRes = GetValue<Promise<'promise'>>;

type GetFirst<P> = P extends [infer First, ...unknown[]] ? First : unknown;
// type GetFirstValue = GetFirst<[1, 2, 3]>

type GetLast<Arr extends unknown[]> = Arr extends [...unknown[], infer Last] ? Last : never;
// type GetLastValue = GetLast<[1, 2, 3]>

type ShiftArr<Arr extends unknown[]> = Arr extends [unknown, ...infer Res] ? Res : unknown;
// type Shift = ShiftArr<[1, 2, 3]>

type StartWith<Str extends string, Prefix extends string> = Str extends `${Prefix}${string}` ? true : false

type Replace<str extends string, from extends string, to extends string> = str extends `${infer pre}${from}${infer after}` ? `${pre}${to}${after}` : str

// trim
type TrimLeft<str extends string> = str extends `${' ' | '\t' | '\n'}${infer res}` ? TrimLeft<res> : str;
type TrimRight<str extends string> = str extends `${infer res}${' ' | '\t' | '\n'}` ? TrimRight<res> : str;
type Trim<str extends string> = TrimLeft<TrimRight<str>>

// params
type GetFunParams<func extends Function> = func extends (...args: infer params) => unknown ? params : unknown

// return type
type GetReturn<func extends Function> = func extends (...args) => infer ret ? ret : unknown;

// this type
type GetThisType<func extends Function> = func extends (this: infer thisArgs, ...args) => unknown ? thisArgs : never

// TODO
// get object value
type GetObjectValue<key extends string, obj extends Object> = key extends keyof obj ? obj[key] : never
type res = GetObjectValue<'name', { name: '111'}> // '111'

// filterValue
type FilterByValueType<obj extends Object, valueType> = { [key in keyof obj as valueType extends obj[key] ? key : never] : obj[key] }

// reverse array
type ReverseArray<arr extends unknown[]> = arr extends [infer first, ...infer res] ? [ReverseArray<res>, first] : arr;

// include
type isEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false
type includes<arr extends unknown[], item> = arr extends [infer first, ...infer res] ? isEqual<first, item> extends true ? true : includes<res, item> : false

// make array with length
type buildArray<Length extends number, item extends unknown, arr extends unknown[] = []> = arr['length'] extends Length ? arr : buildArray<Length, item, [...arr, item]>

// greater than
type GreaterThan<nums1 extends number, nums2 extends number, countArr extends unknown[]> = nums2 extends nums1 ? false : nums2 extends countArr['length'] ? true : nums1 extends countArr['length'] ? false : GreaterThan<nums1, nums2, [unknown, ...countArr]>

// isUnionType
type isUnion<A, B = A> = A extends A ? [B] extends [A] ? false : true : never
// A extends A 这种写法是为了触发分布式条件类型，让每个类型单独传入处理的，没别的意义。
// A extends A 和 [A] extends [A] 是不同的处理，前者是单个类型和整个类型做判断，后者两边都是整个联合类型，因为只有 extends 左边直接是类型参数才会触发分布式条件类型。
