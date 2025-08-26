export interface Result {
  /**
  * 1 is a perfect match. 0.5 is a good match. 0 is no match. 
  */
  readonly score: number

  /** Your original target string */
  readonly target: string

  highlight(highlightOpen?: string, highlightClose?: string): string
  highlight<T>(callback: HighlightCallback<T>): (string | T)[]

  indexes: ReadonlyArray<number>
}
export interface Results extends ReadonlyArray<Result> {
  /** Total matches before limit */
  readonly total: number
}

export interface KeyResult<T> extends Result {
  /** Your original object */
  readonly obj: T
}
export interface KeyResults<T> extends ReadonlyArray<KeyResult<T>> {
  /** Total matches before limit */
  readonly total: number
}

export interface KeysResult<T> extends ReadonlyArray<Result> {
  /**
  * 1 is a perfect match. 0.5 is a good match. 0 is no match. 
  */
  readonly score: number

  /** Your original object */
  readonly obj: T
}
interface KeysResults<T> extends ReadonlyArray<KeysResult<T>> {
  /** Total matches before limit */
  readonly total: number
}


export interface Prepared {
  /** Your original target string */
  readonly target: string
}

export interface Options {
  /** Don't return matches worse than this (higher is faster) */
  threshold?: number

  /** Don't return more results than this (lower is faster) */
  limit?: number

  /** If true, returns all results for an empty search */
  all?: boolean
}
export interface KeyOptions<T> extends Options {
  key: string | ((obj: T) => string) | ReadonlyArray<string>
}
export interface KeysOptions<T> extends Options {
  keys: ReadonlyArray<string | ((obj: T) => string) | ReadonlyArray<string>>
  scoreFn?: (keysResult: KeysResult<T>) => number
}

export interface HighlightCallback<T> { (match: string, index: number): T }

export declare const single: (search: string, target: string | Prepared) => Result | null;

export declare function go(search: string, targets: ReadonlyArray<string | Prepared>, options?: Options): Results;
export declare function go<T>(search: string, targets: ReadonlyArray<T>, options: KeyOptions<T>): KeyResults<T>;
export declare function go<T>(search: string, targets: ReadonlyArray<T>, options: KeysOptions<T>): KeysResults<T>;

/**
* Help the algorithm go fast by providing prepared targets instead of raw strings
*/
export declare const prepare: (target: string) => Prepared;

/**
* Free memory caches if you're done using fuzzysort for now
*/
export declare const cleanup: () => void;

declare const _default: { single: typeof single, go: typeof go, prepare: typeof prepare, cleanup: typeof cleanup };
export default _default;
