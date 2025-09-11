'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for "cat" with no repeating letters', () => {
    expect(isIsogram('cat')).toBe(true);
  });

  it('should return false for "book" with repeating letters', () => {
    expect(isIsogram('book')).toBe(false);
  });

  it('should return true for "sun" with no repeating letters', () => {
    expect(isIsogram('sun')).toBe(true);
  });

  it('should return false for "apple" with repeating letters', () => {
    expect(isIsogram('apple')).toBe(false);
  });

  it('should return true for "mouse" with no repeating letters', () => {
    expect(isIsogram('mouse')).toBe(true);
  });

  it('should return false for "moon" with repeating letters', () => {
    expect(isIsogram('moon')).toBe(false);
  });
});
