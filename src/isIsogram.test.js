/* eslint-disable max-len */
'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for empty string', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('should return true if all letters in string are differents', () => {
    const result = isIsogram('machine');

    expect(result).toBe(true);
  });

  it('should return false if a word contains 2 same letters together', () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it('should return false if a word contains a repeated letter', () => {
    const result = isIsogram('banana');

    expect(result).toBe(false);
  });

  it('should return false if a word contains a repeated letter in deferent case', () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });
});
