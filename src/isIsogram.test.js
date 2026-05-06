'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a Boolean`, () => {
    const result = isIsogram('');

    expect(typeof result).toBe('boolean');
  });

  it(`should return true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should be case-insensitive`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it(`should be case-insensitive`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return true for an isogram`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
    expect(isIsogram('abcdefghijklmnopqrstuvwxyz')).toBe(true);
  });

  it(`should return false for non-isogram`, () => {
    expect(isIsogram('look')).toBe(false);
    expect(isIsogram('chess')).toBe(false);
  });
});
