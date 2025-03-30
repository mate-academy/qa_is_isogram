'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a word without repeating letters', () => {
    expect(isIsogram('abcdefg')).toBe(true);
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('hello')).toBe(false);
  });

  it('should return false for a word with repeating letters in a different case', () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
