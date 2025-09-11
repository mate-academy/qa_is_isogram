"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should work with repeating letters`, () => {
    expect(isIsogram("look")).toBe(false);
  });

  it(
    `should be case-insensitive ` +
      `('A' and 'a' are considered the same letter)`,
    () => {
      expect(isIsogram("Adam")).toBe(false);
    }
  );

  it(`should return true if the letters are not repeated`, () => {
    expect(isIsogram("playgrounds")).toBe(true);
  });
});
