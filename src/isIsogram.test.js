'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  test(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test(`should return 'true' if argument equal empty string`, () => {
    const isogram = isIsogram('');

    expect(isogram)
      .toEqual(true);
  });

  test(`should return 'true' if argument contains no repeating letters`, () => {
    const isogram = isIsogram('abcdef');

    expect(isogram)
      .toEqual(true);
  });

  test(`should return 'true' if argument contains no repeating`
  + `and case-insensitive letters`, () => {
    const isogram = isIsogram('aBcDeF');

    expect(isogram)
      .toEqual(true);
  });

  test(`should return 'false' if argument contains repeating letters`, () => {
    const isogram = isIsogram('aabcdef');

    expect(isogram)
      .toEqual(false);
  });

  test(`should return 'false' if argument contains repeating`
  + `and case-insensitive letters`, () => {
    const isogram = isIsogram('Aabcdef');

    expect(isogram)
      .toEqual(false);
  });
});
