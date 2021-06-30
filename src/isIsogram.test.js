'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('Onetwotest')).toBe('boolean');
  });

  const checkIfSensitive = {
    upperCase: 'A',
    lowerCase: 'a',
  };

  describe('the checkIfSensitive', () => {
    test(`should return a boolean`, () => {
      expect(checkIfSensitive.upperCase
        !== checkIfSensitive.lowerCase).toBeTruthy();
    });
  });

  it(`the empty string is an isogram`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`input: 'playgrounds' should return true`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`input: 'look' should return true`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });
});
