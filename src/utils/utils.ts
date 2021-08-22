// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (value: unknown): value is Function => typeof value === 'function';

export const generateRandomId = (): string => Math.random().toString(36).substr(2);
