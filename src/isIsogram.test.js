'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true on empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true with unique letters`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false on repeated letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return false for case-insensitive duplicates`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return false after duplicated letters`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it(`should return true when only is one letter`, () => {
    expect(isIsogram('a')).toBe(true);
  });
});
