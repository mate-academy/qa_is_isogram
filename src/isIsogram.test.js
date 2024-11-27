'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if empty string`, () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it(`should return true if isogram`, () => {
    const result = isIsogram('playgrounds');

    expect(result).toBeTruthy();
  });

  it(`should return false if is not isogram`, () => {
    const result = isIsogram('look');

    expect(result).toBeFalsy();
  });

  it(`should return false and be case-insensitive if is not isogram`, () => {
    const result = isIsogram('Oops');

    expect(result).toBeFalsy();
  });
});
