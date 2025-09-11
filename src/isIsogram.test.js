'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for "isogram"', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it('should return true for an empty string', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('should return false for non "isogram"', () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it('should be case-insensitive', () => {
    const result = isIsogram('loOk');

    expect(result).toBe(false);
  });

  it('should return true for numbers "isogram"', () => {
    const result = isIsogram('1234');

    expect(result).toBe(true);
  });

});
