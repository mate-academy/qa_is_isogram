'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`an empty string is an isogram`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for an isogram`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false for a word that is not an isogram`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should be case-insensitive`, () => {
    expect(isIsogram('PLAYgrounds')).toBe(true);
  });
});
