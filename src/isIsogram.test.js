'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an empty string`, () => {
    expect(isIsogram('')).toEqual(true);
  });

  it(`should return true for a word with no repeating letters`, () => {
    expect(isIsogram('playgrounds')).toEqual(true);
  });

  it(`should return false for a word with repeating letters`, () => {
    expect(isIsogram('look')).toEqual(false);
  });

  it(`should be case-insensitive with repeating letters`, () => {
    expect(isIsogram('Oops')).toEqual(false);
  });
});
