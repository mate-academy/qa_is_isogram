'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should check is word isogram`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should be case-insensitive with letters`, () => {
    expect(isIsogram('maMMe')).toBe(false);
  });

  it(`should handle error when input is empty or not valid)`, () => {
    expect(() => isIsogram()).toThrow();
    expect(() => isIsogram(4)).toThrow();
  });
});
