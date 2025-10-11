'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('word')).toBe('boolean');
  });

  it(`should return true for isogram`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false for is not isogram`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false if one of lettet is big`
    + `and next duble of this letter is small`, () => {
    expect(isIsogram('Adam')).toBe(false);
    expect(isIsogram('Oops')).toBe(false);
  });
});
