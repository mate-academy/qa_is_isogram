'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('return true if leters no repeating', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it('return false if any leters repeating', () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it('should be case-insensitive', () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });

  it('return true if string empty', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });
});
