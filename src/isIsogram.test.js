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

  it('should return true for a word with no repeating letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for a word with case-insensitive repeating letters', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for a word with all unique letters, regardless of case', () => {
    expect(isIsogram('Lamp')).toBe(true);
  });

  it('should handle words with mixed case and no repeating letters', () => {
    expect(isIsogram('HeLlo')).toBe(false); // 'l' repeats regardless of case
  });

  it('should handle long words with no repeating letters', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });

  it('should return false for words with non-consecutive repeating letters', () => {
    expect(isIsogram('Alphabet')).toBe(false); // 'a' repeats
  });
});
