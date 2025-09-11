'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true if entered empty string has no repeatings', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true if entered string has no repeatings', () => {
    expect(isIsogram('y')).toBe(true);
  });

  it('should return true if entered string has no repeatings', () => {
    expect(isIsogram('Y')).toBe(true);
  });

  it('should return false if entered string has repeatings', () => {
    expect(isIsogram('yY')).toBe(false);
  });

  it('should return true if entered string has no repeatings', () => {
    expect(isIsogram('Yura')).toBe(true);
  });

  it('should return false if entered string has repeatings', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return false if entered string has repeatings', () => {
    expect(isIsogram('Yurii')).toBe(false);
  });

  it('should return true if entered string has no repeatings', () => {
    expect(isIsogram('abcdefghijklmnopqrstuvwxyz')).toBe(true);
  });

  it('should return false if entered string has repeatings', () => {
    expect(isIsogram('Aabcdefghijklmnopqrstuvwxyz')).toBe(false);
  });
});
