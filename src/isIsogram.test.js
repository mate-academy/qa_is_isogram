'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a word without repeating letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for consecutive repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for non-consecutive repeating letters', () => {
    expect(isIsogram('area')).toBe(false);
  });

  it('should return false for repeating letters of different cases', () => {
    expect(isIsogram('Adam')).toBe(false);
    expect(isIsogram('Oops')).toBe(false);
  });

  it('should return true for a single letter string', () => {
    expect(isIsogram('a')).toBe(true);
  });
});
