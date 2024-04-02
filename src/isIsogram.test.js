/* eslint-disable max-len */
'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('should return true for an isogram', () => {
    const result = isIsogram('abcdefg');

    expect(result).toBe(true);
  });

  it('should return false for a non-isogram with repeated letters', () => {
    const result = isIsogram('hello');

    expect(result).toBe(false);
  });

  it('should return true for a string with only one letter', () => {
    const result = isIsogram('a');

    expect(result).toBe(true);
  });

  it('should return false for a non-isogram with repeated letters, ignoring case', () => {
    const result = isIsogram('HelLo');

    expect(result).toBe(false);
  });

  it('should return false for a string with repeated characters and spaces', () => {
    const result = isIsogram('the quick brown fox jumps over the lazy dog');

    expect(result).toBe(false);
  });
});
