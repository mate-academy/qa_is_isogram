'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return "true" for empty string', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('should return "true" for a string without repeating characters', () => {
    const result = isIsogram('playground');

    expect(result).toBe(true);
  });

  it('should return "false" if string have repeating characters', () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it('should be case-insensitive', () => {
    const result = isIsogram('Oops');

    expect(result).toBe(false);
  });
});
