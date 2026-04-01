'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for repeating letters', () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for no repeating letters and case insensitive', () => {
    expect(isIsogram('SERhiy')).toBe(true);
  });

  it('should return true for single-letter word "A"', () => {
    expect(isIsogram('A')).toBe(true);
  });

  it('should return false for repeating character', () => {
    expect(isIsogram('hello')).toBe(false);
  });

  it('should return false for repeating character and case insensitive', () => {
    expect(isIsogram('OKSANA')).toBe(false);
  });
});
