'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return boolean', () => {
    const result = isIsogram('ds');

    expect(typeof (result)).toBe('boolean');
  });

  it('should return "false" for "look" input', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return true for "playgrounds" input', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return true for " " input', () => {
    expect(isIsogram(' ')).toBe(true);
  });

  it('should return true for " " input', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should be case-insensitive, and return false for "Adam"', () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
