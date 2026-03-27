'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be case insensitive
    (to perceive 'A' and 'a' as the same letters)`, () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it(`should return 'true' for a word without repeating letters`, () => {
    expect(isIsogram('smart')).toBeTruthy();
  });

  it(`should return 'false' for a word with repeating letters`, () => {
    expect(isIsogram('smartest')).toBeFalsy();
  });

  it(`should return 'true' for an empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return 'true' for a word of a one letter`, () => {
    expect(isIsogram('a')).toBeTruthy();
  });

  it(`should return 'true' for a word of Cyrillic letters`, () => {
    expect(isIsogram('кіт')).toBeTruthy();
  });
});
