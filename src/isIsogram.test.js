'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true if string is empty', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('should return correct type of value', () => {
    const result = isIsogram('');

    expect(typeof result).toBe('boolean');
  });

  it('should return correct type of value', () => {
    const result = isIsogram('');

    expect(typeof result).toBe('boolean');
  });

  it('should return true for correct value', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it('should return false for incorrect value', () => {
    const result = isIsogram('oops');

    expect(result).toBe(false);
  });
});
