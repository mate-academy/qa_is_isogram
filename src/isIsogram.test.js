'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true if string is empty', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('should return true if string has no repeating letters', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it('should return false if string has repeating letters', () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it('should return false if string is not case-insensitive', () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });
});
