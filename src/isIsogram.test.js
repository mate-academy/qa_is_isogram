'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('should return TRUE for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('should return TRUE for the string of 1 char', () => {
    expect(isIsogram('a')).toBe(true);
  });

  test('should return FALSE for the string of two similar chars', () => {
    expect(isIsogram('bb')).toBe(false);
  });

  test('should return TRUE for isogram string same-case', () => {
    expect(isIsogram('playwords')).toBe(true);
  });

  test('should return FALSE for non-isogram string same-case', () => {
    expect(isIsogram('playworlds')).toBe(false);
  });

  test('should return FALSE for non-isogram string dif-case', () => {
    expect(isIsogram('helLo')).toBe(false);
  });

  test('should return TRUE for non-isogram string dif-case', () => {
    expect(isIsogram('WelCominG')).toBe(true);
  });
});
