/* eslint-disable max-len */
'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a word with all unique letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with consecutive repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for a word with non-consecutive repeating letters', () => {
    expect(isIsogram('banana')).toBe(false);
  });

  it('should return false for a word with mixed case repeating letters', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for a single letter word', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it('should return true for a word with all unique letters in different cases', () => {
    expect(isIsogram('AbcDef')).toBe(true);
  });

  it('should return false for a word with repeating letters in different cases', () => {
    expect(isIsogram('abcdea')).toBe(false);
  });

  it('should return true for a long isogram', () => {
    expect(isIsogram('subdermatoglyphic')).toBe(true);
  });

  it('should return false for a long non-isogram', () => {
    expect(isIsogram('subdermatoglyphics')).toBe(false);
  });

  it('should return true for a word with special characters', () => {
    expect(isIsogram('play-ground')).toBe(true);
  });

  it('should return true for a word with numbers included', () => {
    expect(isIsogram('abc123')).toBe(true);
  });

  it(
    'should return false for a word with repeating letters and special characters',
    () => {
      expect(isIsogram('look-out')).toBe(false);
    }
  );
});
