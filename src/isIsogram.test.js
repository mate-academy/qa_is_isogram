/* eslint-disable max-len */
"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test("should return true for an empty string", () => {
    expect(isIsogram("")).toBe(true);
  });

  test("should return true for a single character string", () => {
    expect(isIsogram("a")).toBe(true);
  });

  test("should return true for a word with all unique letters", () => {
    expect(isIsogram("playgrounds")).toBe(true);
  });

  test("should return false for a word with consecutive repeating letters", () => {
    expect(isIsogram("look")).toBe(false);
  });

  test("should return false for a word with non-consecutive repeating letters", () => {
    expect(isIsogram("aba")).toBe(false);
  });

  test("should return false for a word with mixed-case repeating letters", () => {
    expect(isIsogram("Adam")).toBe(false);
  });

  test('should return false for the example word "Oops"', () => {
    expect(isIsogram("Oops")).toBe(false);
  });

  test('should return false for a word with the same letters in different cases ("aA")', () => {
    expect(isIsogram("aA")).toBe(false);
  });

  test('should return true for another known isogram ("subdermatoglyphic")', () => {
    expect(isIsogram("subdermatoglyphic")).toBe(true);
  });
});
