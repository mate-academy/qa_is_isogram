'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('word without repeating letters', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it('word with consecutive repeating letters', () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it('word with not consecutive repeating letters', () => {
    const result = isIsogram('adam');

    expect(result).toBe(false);
  });

  it('case-insensitive non-consecutive letters', () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });

  it('empty string', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('consecutive repeating letters and case-insensitive', () => {
    const result = isIsogram('Oops');

    expect(result).toBe(false);
  });
});
