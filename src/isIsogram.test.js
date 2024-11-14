'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a single letter word', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it('should return true for a lowercase isogram', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return true for an uppercase isogram', () => {
    expect(isIsogram('HARMONY')).toBe(true);
  });

  it('should return true for a mixed-case isogram', () => {
    expect(isIsogram('Machine')).toBe(true);
  });

  it('should return false for a word with'
    + 'consecutive repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for a word with'
    + 'non-consecutive repeating letters', () => {
    expect(isIsogram('banana')).toBe(false);
  });

  it('should return false for a mixed-case word with repeating letters', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return false for a word with repeating'
    + ' letters in different cases', () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
