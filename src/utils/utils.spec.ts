/* eslint-disable no-undef */

import { isFunction, generateRandomId } from './utils';

describe('Test isFunction', () => {
  it('Test if a variable is a function', () => {
    const testFunction = () => {};
    const result = isFunction(testFunction);
    expect(result).toBeTruthy();
  });
});

describe('Test generateRandomId', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('Test to generate random id', () => {
    const randomValue = generateRandomId();

    expect(randomValue).toBe('4fzzzxjylrx');
  });
});
