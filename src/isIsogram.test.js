/* eslint-disable quotes */
"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it("should be declared", () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it("should return boolean", () => {
    expect(typeof isIsogram("")).toBe("boolean");
  });

  it("should be case-insensitive", () => {
    expect(isIsogram("Dermatoglyphics")).toBe(true);
    expect(isIsogram("aba")).toBe(false);
    expect(isIsogram("moOse")).toBe(false);
  });

  it("empty string should always be an isogram", () => {
    expect(isIsogram("")).toBe(true);
  });

  it("should correctly identify isograms and non-isograms", () => {
    expect(isIsogram("subdermatoglyphic")).toBe(true);
    expect(isIsogram("hello")).toBe(false);
    expect(isIsogram("banana")).toBe(false);
    expect(isIsogram("a")).toBe(true);
  });
});
