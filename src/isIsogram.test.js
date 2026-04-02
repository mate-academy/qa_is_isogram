'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should work independently from Upper and Lower cases', () => {
    expect(isIsogram('Monument')).toBe(true);
  });

  it('should return false when the word is not an isogram', () => {
    expect(isIsogram('Kati')).toBe(false);
  });

  it('should return true for an empty argument', () => {
    expect(isIsogram('')).toBe(true);
  });

});
