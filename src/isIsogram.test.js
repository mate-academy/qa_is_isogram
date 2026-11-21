'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true if word is empty', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('should return true, this is isogram', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it('should return true, this is isogram if first letter are "P"', () => {
    const result = isIsogram('Playgrounds');

    expect(result).toBe(true);
  });

  it('should be case-insensitive', () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });

  it('should return false if word has consecutive repeating letters', () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it('should non-consecutive', () => {
    const result = isIsogram('loko');

    expect(result).toBe(false);
  });
});
