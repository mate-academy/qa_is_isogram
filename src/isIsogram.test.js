"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test("should return true for an empty string", () => {
    expect(isIsogram("")).toBe(true);
  });

  test("should return true for a valid isogram", () => {
    expect(isIsogram("playgrounds")).toBe(true);
    expect(isIsogram("machine")).toBe(true);
  });

  test("should return false if letters repeat", () => {
    expect(isIsogram("look")).toBe(false);
    expect(isIsogram("eleven")).toBe(false);
  });

  test("should be case-insensitive", () => {
    expect(isIsogram("Adam")).toBe(false);
    expect(isIsogram("Moose")).toBe(false);
    expect(isIsogram("Alphabet")).toBe(false);
  });

  test("should return false for 'Oops'", () => {
    expect(isIsogram("Oops")).toBe(false);
  });

  test("should return true for single character", () => {
    expect(isIsogram("a")).toBe(true);
    expect(isIsogram("Z")).toBe(true);
  });
});
