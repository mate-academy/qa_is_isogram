'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for isogram ', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for no isogram', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return false for no isogram', () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
