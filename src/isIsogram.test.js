'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return false if word is not isogram', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return true if word is isogram', () => {
    expect(isIsogram('products')).toBe(true);
  });

  it('should work with uppercase word', () => {
    expect(isIsogram('PRODUCTS')).toBe(true);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('PlAyGroUnDS')).toBe(true);
  });

  it('should return false if word includes one'
   + ' letter in both upper and lower cases', () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
