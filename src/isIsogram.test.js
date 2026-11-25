'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should work with letter case ', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for the empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for the isogram', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });
});
