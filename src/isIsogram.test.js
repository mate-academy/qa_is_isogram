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

  it('should return true for a isogram with special characters', () => {
    const result = isIsogram('R@ce');

    expect(result).toBe(true);
  });

  it('should return true for a isogram with digits', () => {
    const result = isIsogram('abc123');

    expect(result).toBe(true);
  });

  it('should return true for a isogram with mixed characters', () => {
    const result = isIsogram('A1bC@d3E');

    expect(result).toBe(true);
  });
});
