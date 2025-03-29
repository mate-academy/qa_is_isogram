'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if 'word' = ''`, () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it(`should return true if 'word' is Isogram`, () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it(`should return false if 'word' contain same letters in a row`, () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it(`should return false if 'word' contain non-consecutive same letters`,
    () => {
      const result = isIsogram('delete');

      expect(result).toBe(false);
    },
  );

  it(`should be case-insensitive`, () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });
});
