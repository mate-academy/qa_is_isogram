'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for word with no repeating letters`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return true for word with no repeating letters`
    + `in different registers`, () => {
    expect(isIsogram('Playgrounds')).toBe(true);
  });

  it(`should return false for 2 repeating consecutive letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return false for 2 repeating non-consecutive letters`, () => {
    expect(isIsogram('repeat')).toBe(false);
  });

  it(`should return false for 2 repeating`
  + ` consecutive letters in different registers`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it(`should return false for 2 repeating`
  + ` non-consecutive letters in different registers`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });
});
