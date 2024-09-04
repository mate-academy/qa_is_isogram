"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it("should true for an empty string", () => {
    expect(isIsogram("")).toBe(true);
  });

  it("should true for a single letter string", () => {
    expect(isIsogram("a")).toBe(true);
  });

  it("should false with duplicate letters", () => {
    expect(isIsogram("aab")).toBe(false);
  });

  it("should true with all unique letters", () => {
    expect(isIsogram("abcde")).toBe(true);
  });

  it("should true with mixed case letters", () => {
    expect(isIsogram("Ab")).toBe(true);
  });

  it("should true with non-alphabetic characters", () => {
    expect(isIsogram("a1b2c3")).toBe(true);
  });

  it("should false with a repeated non-alphabetic chars", () => {
    expect(isIsogram("a1b2c3a")).toBe(false);
  });

  it("should false with non-alphabetic charas in mixed case", () => {
    expect(isIsogram("A1b2c3A")).toBe(false);
  });
});
