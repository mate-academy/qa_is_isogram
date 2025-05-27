'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for isogram`, () => {
    const expected = isIsogram('playgrounds');

    expect(expected).toBe(true);
  });

  it(`should return false for repeating letter`, () => {
    const expected = isIsogram('look');

    expect(expected).toBe(false);
  });

  it(`should be case-insensitive`, () => {
    const expected = isIsogram('Adam');

    expect(expected).toBe(false);
  });

  it(`should return true for empty string`, () => {
    const expected = isIsogram('');

    expect(expected).toBe(true);
  });
});
