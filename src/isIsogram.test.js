'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a single-letter word', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it('should return true when every letter is unique', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for consecutive repeated letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for non-consecutive repeated letters', () => {
    expect(isIsogram('letter')).toBe(false);
  });

  it('should treat uppercase and lowercase forms as the same letter', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for a mixed-case word with unique letters', () => {
    expect(isIsogram('IsOgram')).toBe(true);
  });

  it('should return false when all letters are identical', () => {
    expect(isIsogram('aaa')).toBe(false);
  });

  it('should detect a repeated letter at opposite ends of a word', () => {
    expect(isIsogram('abca')).toBe(false);
  });
});
