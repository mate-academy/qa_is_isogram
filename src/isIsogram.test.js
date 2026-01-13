'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`unique chars return true`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`repetitive chars return false`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`returns true for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it('returns false when the same letter appears in different cases', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('returns false for mixed-case repeated letters', () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
