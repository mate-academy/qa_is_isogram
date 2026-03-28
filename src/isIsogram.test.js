'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true if all letters are unique', () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
    expect(isIsogram('ASDFGH')).toBeTruthy();
  });

  it(`should return false if the letter in the same register
    repeats`, () => {
    expect(isIsogram('look')).toBeFalsy();
    expect(isIsogram('ACDC')).toBeFalsy();
  });

  it(`should return false if the letter in differrent registers
    repeats`, () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it('should return true if an empty string provided', () => {
    expect(isIsogram('')).toBeTruthy();
  });
});
