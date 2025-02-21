'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return boolean', () => {
    expect(typeof isIsogram('')).toBe('boolean');
  });

  it('should return true for word with unique letters', () => {
    expect(isIsogram('playground')).toBe(true);
    expect(isIsogram('')).toBe(true);
  });

  it('should return false for same letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('Adam')).toBe(false);
    expect(isIsogram('Oops')).toBe(false);
  });
});
