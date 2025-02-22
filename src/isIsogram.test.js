'use strict';

describe('isIsogram', () => {
  test('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('should return true for "playgrounds"', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test('should return false for "look"', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test('should return false for "Adam"', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  test('should return true for "isogram"', () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  test('should return false for "repetition"', () => {
    expect(isIsogram('repetition')).toBe(false);
  });

  test('should return true for "subdermatoglyphic"', () => {
    expect(isIsogram('subdermatoglyphic')).toBe(true);
  });

  test('should return true for "thumbscrew-japingly"', () => {
    expect(isIsogram('thumbscrew-japingly')).toBe(true);
  });

  test('should return false for "Alphabet"', () => {
    expect(isIsogram('Alphabet')).toBe(false);
  });

  test('should return false for "hello"', () => {
    expect(isIsogram('hello')).toBe(false);
  });
});
