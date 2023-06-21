'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for an isogram word', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with repeating letters',
    () => {
      expect(isIsogram('look')).toBe(false);
    });

  it('should be case-insensitive', () => {
    expect(isIsogram('Adam')).toBe(false);
    expect(isIsogram('madam')).toBe(false);
  });

  it('should return true for a word with no repeating letters',
    () => {
      expect(isIsogram('abcdefg')).toBe(true);
    });

  it('should return false for a word with consecutive repeating letters',
    () => {
      expect(isIsogram('hello')).toBe(false);
    });

  it('should return true for a word with non-consecutive repeating letters',
    () => {
      expect(isIsogram('yellow')).toBe(false);
    });

  it('should return true for a word with all the same letters', () => {
    expect(isIsogram('aaa')).toBe(false);
  });

  it('should handle special characters and spaces correctly', () => {
    expect(isIsogram('hello world')).toBe(false);
  });
});
