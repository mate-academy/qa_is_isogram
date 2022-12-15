/* eslint-disable max-len */
'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram)
      .toBeInstanceOf(Function);
  });

  test(`should return true if word is empty`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  test(`should be case-insensitive`, () => {
    expect(isIsogram('Abra'))
      .toBe(false);
  });

  test(`should return true if word is isogram`, () => {
    expect(isIsogram('main'))
      .toBe(true);
  });

  test(`should return false if word has the same letters`, () => {
    expect(isIsogram('banana'))
      .toBe(false);
  });

  test(`should return true if word contain only space`, () => {
    expect(isIsogram(' '))
      .toBe(true);
  });

  test(`should return true if word contain the same Latin and Cyrillic letters`, () => {
    expect(isIsogram('CatСобака'))
      .toBe(false);
  });
});
