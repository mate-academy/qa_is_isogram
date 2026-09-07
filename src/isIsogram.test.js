'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for a word with unique letters', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it('should return false for a word with repeated consecutive letters', () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it('should return false when repeated letters have different cases', () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });

  it('should return true for an empty string', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('should return false for a word with repeated non-consecutive letters', () => {
    const result = isIsogram('Oops');

    expect(result).toBe(false);
  });
});
