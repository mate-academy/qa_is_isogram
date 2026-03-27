'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for string with no repeating small letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for string with repeating small letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return true for string with no repeating letters', () => {
    expect(isIsogram('PLAYgROUNDS')).toBe(true);
  });

  it('should return false for string with repeating letters', () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
