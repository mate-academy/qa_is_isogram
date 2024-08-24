'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true or false`, () => {
    const result = isIsogram('word');
    const value = toString.call(result);

    expect(value).toBe('[object Boolean]');
  });

  it(`should be case insensitive`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return true for empty 'word'`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for 'word' that has no repeating letters`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false for 'word' that has repeating letters`, () => {
    expect(isIsogram('playgrounds look')).toBe(false);
  });
});
