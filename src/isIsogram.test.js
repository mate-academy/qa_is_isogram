'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should be right result for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should be true for string 'playgrounds'`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should be false for string 'look'`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should be false for string 'Oops'`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
