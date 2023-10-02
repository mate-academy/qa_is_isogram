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

  it('should return true for a lowercase isogram', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it('should return true for a mixed-case isogram', () => {
    const result = isIsogram('RaceCar');

    expect(result).toBe(false);
  });

  it('should return false for a word with repeating letters', () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it('should handle accented characters', () => {
    const result = isIsogram('résum');

    expect(result).toBe(true);
  });

  it('should handle non-letter characters', () => {
    const result = isIsogram('ab-cdefg');

    expect(result).toBe(true);
  });
});
