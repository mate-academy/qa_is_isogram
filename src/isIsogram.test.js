'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' when entering an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return 'true' when entering one letter`, () => {
    expect(isIsogram('f')).toBe(true);
  });

  it(`should return 'true' when entering no repeating letters`, () => {
    expect(isIsogram('black')).toBe(true);
  });

  it(`should return 'true' `
  + `when the repeated letter is a Cyrillic letter`, () => {
    expect(isIsogram('schoоl')).toBe(true);
  });

  it(`should return 'false' when entering repeating letter`, () => {
    expect(isIsogram('school')).toBe(false);
  });

  it(`should return 'false' `
  + `when entering repeating letter in upper case`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
