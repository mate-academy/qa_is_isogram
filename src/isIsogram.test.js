'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('returns true for "playgrounds" as it is an isogram', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('returns false for "look"', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('returns false for "Adam"', () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
