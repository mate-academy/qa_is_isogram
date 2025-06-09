'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });  
  it('should return true for a word with all unique letters (e.g. "playgrounds")', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });
  it('should return false for a word with repeated letters (e.g. "look")', () => {
    expect(isIsogram('look')).toBe(false); // repeated 'o'
  });
  it('should return false when the same letter appears in different cases (e.g. "Adam")', () => {
    expect(isIsogram('Adam')).toBe(false); // 'A' and 'a'
  });
  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });
  it('should return false for a word with repeated letters in different cases (e.g. "Oops")', () => {
    expect(isIsogram('Oops')).toBe(false); // 'o' and 'O'
  });
  it('should return true for a single-letter word (e.g. "x")', () => {
    expect(isIsogram('x')).toBe(true);
  });
  it('should return true for a word with no duplicate letters and mixed case (e.g. "Subdermatoglyphic")', () => {
    expect(isIsogram('Subdermatoglyphic')).toBe(true);
  });
  it('should return false for a word with non-consecutive repeated letters (e.g. "banana")', () => {
    expect(isIsogram('banana')).toBe(false);
  });
});
