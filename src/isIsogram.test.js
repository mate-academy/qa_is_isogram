'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for an isogram string', () => {
    expect(isIsogram('subdermatoglyphic')).toBe(true);
  });

  it('should return false for non-isogram string', () => {
    expect(isIsogram('book')).toBe(false);
  });

  it('should handle case-insensitivity', () => {
    expect(isIsogram('Sister')).toBe(false);
  });

  it('should return true for a single character string', () => {
    expect(isIsogram('f')).toBe(true);
  });

  it('should return false for a long non-isogram string', () => {
    expect(isIsogram('nonisogramword')).toBe(false);
  });
});
