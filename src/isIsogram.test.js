'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test(`should return true when input string
   has uppercase and no repeatings `, () => {
    expect(isIsogram('Kostia')).toBe(true);
  });

  test(`should return falce when input string
   has uppercase and repeatings' `, () => {
    expect(isIsogram('Marichka')).toBe(false);
  });

  test(`should return falce when input string
   has uppercase and repeatings' `, () => {
    expect(isIsogram('Kateryna')).toBe(false);
  });

  test(`should return true when input string
   has uppercase and no repeatings' `, () => {
    expect(isIsogram('Kate')).toBe(true);
  });

  test(`should return true when input string are empty `, () => {
    expect(isIsogram('')).toBe(true);
  });
});
