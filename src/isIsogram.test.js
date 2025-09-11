'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return only boolean values', () => {
    expect(typeof isIsogram('cat')).toBe('boolean');
  });

  it('should return true if empty array', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return true if 'str' is isogram`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false if 'str' is not isogram`, () => {
    expect(isIsogram('look')).toBe(false);
  });
});
