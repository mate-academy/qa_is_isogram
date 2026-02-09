"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it("should return true for all variants of empty string", () => {
    expect(isIsogram("")).toBe(true);
  });

  it("should return false for the string with M and m letters", () => {
    const wordWithTrick = "MancUtdM";

    expect(isIsogram(wordWithTrick)).toBe(false);
  });

  it("should return false for `Oops`", () => {
    expect(isIsogram(`Oops`)).toBe(false);
  });

  it("should return true for `playgrounds`", () => {
    const word = `playgrounds`;

    expect(isIsogram(word)).toBe(true);
  });

  it("should return false for `look`", () => {
    const word = "look";

    expect(isIsogram(word)).toBe(false);
  });

  it("should return false for word `Adam`", () => {
    const word = "Adam";

    expect(isIsogram(word)).toBe(false);
  });
});
