'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('returns true for an empty string', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('returns true for a word without repetitions', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it('returns false for a word with repeated letters', () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it(`is case-insensitive — treats 'Adam' as non-isogram`, () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });

  it(`is case-insensitive — treats 'Oops' as non-isogram`, () => {
    const result = isIsogram('Oops');

    expect(result).toBe(false);
  });
});
