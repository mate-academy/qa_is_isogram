'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a string without repeating letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a string with repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for a string with all same letters', () => {
    expect(isIsogram('aaa')).toBe(false);
  });

  it('should return true for a long string without repeating letters', () => {
    expect(isIsogram('abcdefghijklmnopqrstuvwxyz')).toBe(true);
  });

  it('should return false for a long string with repeating letters', () => {
    expect(isIsogram('abcdefga')).toBe(false);
  });

  test('should return true for a single character', () => {
    expect(isIsogram('a')).toBe(true);
  });
});
