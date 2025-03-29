'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for "playgrounds" (no repeated letters)', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for "look" (contains repeated letters)', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for "Adam" (contains repeated'
    + 'letters with different cases)', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for "їmarф" (contains both Cyrillic'
    + 'and Latin letters without repetition)', () => {
    expect(isIsogram('їmarф')).toBe(true);
  });

  it('should return false for "fantastic" (contains repeated letters)', () => {
    expect(isIsogram('fantastic')).toBe(false);
  });

  it('should return false for "fantastic e" (contains repeated'
     + 'letters and additional space)', () => {
    expect(isIsogram('fantastic e')).toBe(false);
  });

  it('should return false for "Alphabet" (case insensitive check)', () => {
    expect(isIsogram('Alphabet'.toLowerCase())).toBe(false);
  });

  it('should return false for "moOse" (contains repeated'
    + 'letters with different cases)', () => {
    expect(isIsogram('moOse')).toBe(false);
  });
});
