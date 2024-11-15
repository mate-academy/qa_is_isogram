'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for a word with no repeating letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for a case-sensitive repeating letters', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it(
    'should return false for a word with case-insensitive repeating letters',
    () => {
      expect(isIsogram('Oops')).toBe(false);
    }
  );
});
