'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`return true for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`return true if chars doesn't repeat`, () => {
    expect(isIsogram('abc')).toBe(true);
  });

  it(`return false if chars repeat`, () => {
    expect(isIsogram('abcb')).toBe(false);
  });

  it(`is case-insensitive, uppercase and lowercase is the same symbol`, () => {
    expect(isIsogram('abcC')).toBe(false);
  });
});
