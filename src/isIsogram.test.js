'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' if 'word' is empty`, () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it(`should return 'true'
    if 'word' does not contain any duplicate letters`, () => {
    const result = isIsogram('abcde');

    expect(result).toBe(true);
  });

  it(`should return 'false'
    if 'word' contains duplicate letters`, () => {
    const result = isIsogram('apple');

    expect(result).toBe(false);
  });

  it(`should be case-insensitive`, () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });
});
