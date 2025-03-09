'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for "playgrounds" with no repeating letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for "look" because "o" repeats', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return true for an empty string with no repeating letters', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return false for "Oops" because "o" repeats', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it('should return true for "a" with no repeats', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it('should return true for "abcd" with no repeating letters', () => {
    expect(isIsogram('abcd')).toBe(true);
  });

  it('should return false for "aa" because "a" repeats', () => {
    expect(isIsogram('aa')).toBe(false);
  });
});
