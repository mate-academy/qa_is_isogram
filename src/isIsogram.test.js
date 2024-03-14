'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an empty string`, () => {
    const result = isIsogram('');

    expect(result).toEqual(true);
  });

  it(`should return true for a word with one letter length`, () => {
    const result = isIsogram('d');

    expect(result).toEqual(true);
  });

  it(`should return true for a word without repeating letters`, () => {
    const result = isIsogram('abcdefg');

    expect(result).toEqual(true);
  });

  it(`should return true for a word without repeating letters`
    + ` in different cases`, () => {
    const result = isIsogram('Abcdefg');

    expect(result).toEqual(true);
  });

  it(`should return false for a word with all repeating letters`, () => {
    const result = isIsogram('bbbbbb');

    expect(result).toEqual(false);
  });

  it(`should return false for a word with repeating letters`
    + ` in different cases`, () => {
    const result = isIsogram('abcBdefg');

    expect(result).toEqual(false);
  });

});
