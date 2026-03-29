'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test(`should return true for an isogram`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test(`should return false for a non-isogram`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  test(`should return true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  test(`should be case-insensitive`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
