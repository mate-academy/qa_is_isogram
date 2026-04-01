'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('should return true for "playgrounds" (no repeating letters)', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it('should return false for "look" (repeating "o")', () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it('should return false for "Adam" (repeating "a")', () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });

  it('should return false for "aaaa" (all repeating letters)', () => {
    const result = isIsogram('aaaa');

    expect(result).toBe(false);
  });

  it('should return true for "Blue" (no repeating letters, mixed case)', () => {
    const result = isIsogram('Blue');

    expect(result).toBe(true);
  });

  it('should return true for a single letter word like "A"', () => {
    const result = isIsogram('A');

    expect(result).toBe(true);
  });
});
