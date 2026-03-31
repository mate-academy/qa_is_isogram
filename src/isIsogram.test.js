/* eslint-disable max-len */
'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return 'true' for a standard isogram (no repeating letters)`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return 'false' when letters are repeated consecutively ('ll')`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return 'false' when letters are repeated non-consecutively ('O' and 'o')`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it(`should return 'false' when letters are repeated, case-insensitively ('A' and 'a')`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return 'true' for a single-letter string`, () => {
    expect(isIsogram('a')).toBe(true);
  });
});
