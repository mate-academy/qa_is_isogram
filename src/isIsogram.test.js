'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for empty string', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('should return true for non repeated letters world', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it('should return false for repeated letters world', () => {
    let result = isIsogram('look');

    expect(result).toBe(false);

    result = isIsogram('Adam');

    expect(result).toBe(false);
  });
});
