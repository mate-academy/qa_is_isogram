'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for the empty string', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('should be case-insensitive', () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });

  it('should return true for word without repeated letters', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it('should return false for word with repeated letters', () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });
});
