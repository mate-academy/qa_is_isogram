'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });
  
  it('should be case-insensitive', () => {
    expect(isIsogram('ISOGRAM')).toBe(true);
  });
  
  it('should return false for string with two same chars', () => {
    expect(isIsogram('uppercase')).toBe(false);
  });
  
  it('should return true for string with one char', () => {
    expect(isIsogram('u')).toBe(true);
  });
  
  it('should return false for string'
  + 'that contains the same upper and lower chars', () => {
    expect(isIsogram('Animal')).toBe(false);
  });
  
  it('should return true for cyrillic string', () => {
    expect(isIsogram('товариш')).toBe(true);
  });
});
