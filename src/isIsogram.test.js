'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if the input is an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true if the letters
    are not repeated in the word`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false if the letters
    are repeated in the word`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return false if the word contains
    repeated uppercase and lowercase letters`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

});
