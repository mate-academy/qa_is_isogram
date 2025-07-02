/* eslint-disable max-len */
'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for a word with no repeating letters (case-insensitive)', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for a word with repeating letters (case-insensitive)', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return false for a word with repeating letters (case-insensitive)', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it('should return true for a word with a single letter', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it('should return false for a word with repeating case-insensitive letters', () => {
    expect(isIsogram('aa')).toBe(false);
  });

  it('should return false for a word with spaces and repeated letters', () => {
    // Remove spaces before passing to the function
    expect(isIsogram('no no'.replace(/\s+/g, ''))).toBe(false);
  });

  it('should return true for a word with mixed case letters, no repeats', () => {
    expect(isIsogram('AbCdeF')).toBe(true);
  });

  it('should return false for a word with mixed case letters and repeats', () => {
    expect(isIsogram('aAbC')).toBe(false);
  });
});
