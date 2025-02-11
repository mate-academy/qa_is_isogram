'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for 'playgrounds'`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return true for 'look'`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return false for 'Background'`, () => {
    expect(isIsogram('Background')).toBe(true);
  });
});
