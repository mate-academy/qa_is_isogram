'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  test(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('should return true if string is empty', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('should return true if string has one letter', () => {
    expect(isIsogram('l')).toBe(true);
  });

  test('should return false if string has two same letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test('should return true if string has only unique letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test(`should return false if string
     has two same letters with different cases`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  test('should return true if string has unique chars (with numbers)', () => {
    expect(isIsogram('1playgrounds')).toBe(true);
  });

  test('should return false if string has same numbers', () => {
    expect(isIsogram('1playgrounds1')).toBe(false);
  });

  test(`should return true if string
     has unique chars (with special symbols)`, () => {
    expect(isIsogram('!playgrounds')).toBe(true);
  });

  test('should return false if string has same special symbols', () => {
    expect(isIsogram('!playgrounds!')).toBe(false);
  });
});
