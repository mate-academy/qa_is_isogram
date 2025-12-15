'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('should return true if word === "" ', () => {
    expect(isIsogram("")).toBeTruthy();
  });

  test('isIsogram always returns a boolean', () => {
    const testWords = ["", "abc", "apple", "Kjdahfg", "aAa", "123", " "];

    testWords.forEach(word => {
      expect(typeof isIsogram(word)).toBe("boolean");
    });
  });

  test('should return true for word === "playgrounds" ', () => {
    expect(isIsogram("playgrounds")).toBeTruthy();
  });

  test('should return true for word === "look" ', () => {
    expect(isIsogram("look")).toBeFalsy();
  });

  test('should return true for word === "Oops" ', () => {
    expect(isIsogram("Oops")).toBeFalsy();
  });
});
