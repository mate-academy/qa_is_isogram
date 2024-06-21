'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true if word is isogram', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false if word with repeated letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false if repeated letters in Upper and Lower cases', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true if entered empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true if entered cyryllic and latin letters', () => {
    expect(isIsogram('їmarф')).toBe(true);
  });
});
