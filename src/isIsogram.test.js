'use strict';

const isIsogram = require('./isIsogram');

describe('isIsogram', () => {
  it('should be a function', () => {
    expect(typeof isIsogram).toBe('function');
  });

  it('returns true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('returns true for a word with all unique letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
    expect(isIsogram('abcdef')).toBe(true);
  });

  it('returns false for a word with repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
    expect(isIsogram('apple')).toBe(false);
  });

  it('is case insensitive', () => {
    expect(isIsogram('Adam')).toBe(false);
    expect(isIsogram('Oops')).toBe(false);
    expect(isIsogram('abcDef')).toBe(true);
  });

  it('handles special characters', () => {
    expect(isIsogram('hello!')).toBe(false);
    expect(isIsogram('a-b-c')).toBe(true);
  });
});
