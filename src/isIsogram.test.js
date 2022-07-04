'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof isIsogram('abcdef')).toBe('boolean');
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram('')).toEqual(true);
  });

  it(`should be case insensitive (return false if input is 'Aabc')`, () => {
    expect(isIsogram('Aabc')).toEqual(false);
  });

  it(`should work with correct input ('abcdef')`, () => {
    expect(isIsogram('abcdef')).toEqual(true);
  });

  it(`should work with correct input ('qwertyuio')`, () => {
    expect(isIsogram('qwertyuio')).toEqual(true);
  });

  it(`should return false with incorrect input ('aabcde')`, () => {
    expect(isIsogram('aabcde')).toEqual(false);
  });

  it(`should return false with incorrect input ('qwerRtyy')`, () => {
    expect(isIsogram('qwerRtyy')).toEqual(false);
  });
});
