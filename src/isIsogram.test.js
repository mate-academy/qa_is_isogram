'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return false for repeated letters', () => {
    expect(isIsogram('hello')).toBe(false);
  });

  it('should return true for empty field', () => {
    expect(isIsogram(' ')).toBe(true);
  });

  it('should return true for not repited letters', () => {
    expect(isIsogram('Ruslan')).toBe(true);
  });

  it('should return false if a word contains a repeating upper and lower case letter', () => {
    expect(isIsogram('Mama')).toBe(false);
  });
});
