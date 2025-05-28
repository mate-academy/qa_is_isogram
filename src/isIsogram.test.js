'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a word with all unique letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for single character', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it('should return true for case-insensitive unique letters', () => {
    expect(isIsogram('Machine')).toBe(true);
  });

  it('should return false for multiple duplicate letters', () => {
    expect(isIsogram('Programming')).toBe(false);
  });

  it('should return true for word with all unique mixed-case letters', () => {
    expect(isIsogram('UniqE')).toBe(true);
  });

  it('should handle long isogram correctly', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });
});
