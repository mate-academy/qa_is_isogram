'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  test(`should be declared`, () => {
    expect(isIsogram)
      .toBeInstanceOf(Function);
  });

  test(`should be declared`, () => {
    expect(isIsogram())
      .toBeInstanceOf(String);
  });

  test(`Empty string should be an isogram`, () => {
    expect(isIsogram(''))
      .toEqual(true);
  });

  test(`One letter should be an isogram`, () => {
    expect(isIsogram('a'))
      .toEqual(true);
  });

  test(`Two spaces input should not ne an isogram`, () => {
    expect(isIsogram('  '))
      .toEqual(false);
  });

  test(`All different characters should be an isogran`, () => {
    expect(isIsogram('abcdefghijklmnopqrstuvw'))
      .toEqual(true);
  });

  test(`Same capital and small letter shoul not be an isogram`, () => {
    expect(isIsogram('Cc'))
      .toEqual(false);
  });

  test(`One space can be an isogram`, () => {
    expect(isIsogram('abc def'))
      .toEqual(true);
  });
});
