/* eslint quotes: ["off"] */
"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it("should return a boolean value", () => {
    const result = isIsogram("");

    expect(typeof result).toBe("boolean");
  });

  it("should return true for a valid isogram", () => {
    const result = isIsogram("playgrounds");

    expect(result).toBeTruthy();
  });

  it("should return false for a word with repeated letters", () => {
    const result = isIsogram("look");

    expect(result).toBeFalsy();
  });

  it("should be case insensitive", () => {
    const result = isIsogram("Adam");

    expect(result).toBeFalsy();
  });

  it("should return true for an empty string", () => {
    const result = isIsogram("");

    expect(result).toBeTruthy();
  });

  it("should return true for single-letter words", () => {
    const result = isIsogram("A");

    expect(result).toBeTruthy();
  });
});
