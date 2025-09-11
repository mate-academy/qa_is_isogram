'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('empty string', () => {
    const res = isIsogram('');

    expect(res).toBe(true);
  });

  it('should be case-insensitive', () => {
    const res = isIsogram('Adam');

    expect(res).toBe(false);
  });

  it('should return correct value', () => {
    const res = isIsogram('playgrounds');

    expect(res).toBe(true);
  });

  it('single character', () => {
    const res = isIsogram('b');

    expect(res).toBe(true);
  });

  it('words with repeating letters', () => {
    const res = isIsogram('bab');

    expect(res).toBe(false);
  });

  it('should handle words with hyphens or spaces correctly', () => {
    const res = isIsogram('sub-dermatoglyphic');

    expect(res).toBe(true);
  });
});
