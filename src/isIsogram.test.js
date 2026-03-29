'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for 'playgrounds' (isogram)`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false for 'look' (consecutive duplicate)`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return false for 'Adam'`
    + `(case-insensitive non-consecutive duplicate)`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return false for 'Oops' (consecutive duplicate with case)`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it(`should return true for a word with all unique letters`, () => {
    expect(isIsogram('abcdef')).toBe(true);
  });

  it(`should return false for a word with repeated letters`, () => {
    expect(isIsogram('abcdeaf')).toBe(false);
  });

  it(`should return false regardless of case (case-insensitive check)`, () => {
    expect(isIsogram('AbcDeaF')).toBe(false);
  });

  it(`should return true for a single-letter word`, () => {
    expect(isIsogram('a')).toBe(true);
  });
});
