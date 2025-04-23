'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true if string is empty', () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it('should return true if string does not have duplicate letters', () => {
    expect(isIsogram('Dino')).toBeTruthy();
  });

  it('should return false if string has duplicate letters', () => {
    expect(isIsogram('penguin')).toBeFalsy();
  });

  it('should return false even if duplicate letters are in different case',
    () => {
      expect(isIsogram('peacE')).toBeFalsy();
    });
});
