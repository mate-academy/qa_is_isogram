'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for isogram words like "playgrounds"', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for words with repeating letters like "look"', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return true for single character strings', () => {
    expect(isIsogram('A')).toBe(true);
  });
});
