'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for an isogram`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false for a non-isogram`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should be case-insensitive`, () => {
    expect(isIsogram('Adam')).toBe(false);
    expect(isIsogram('Oops')).toBe(false);
  });
});
