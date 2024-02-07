'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return false if entered string is lowercase', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false if entered string is upercase', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('Should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });
});
