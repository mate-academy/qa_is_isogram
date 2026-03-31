"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it("should return true for an empty string", () => {
    const result = isIsogram("");

    expect(result).toBe(true);
  });

  it("should return true for a single character", () => {
    const result = isIsogram("t");

    expect(result).toBe(true);
  });

  it("should ignore case", () => {
    const result = isIsogram("AbCdEfY");
    const expectedResult = true;

    expect(result).toBe(expectedResult);
  });

  it("should return false for non-isogram", () => {
    const result = isIsogram("Hello");
    const expectedResult = false;

    expect(result).toBe(expectedResult);
  });

  it("should ignore not alphabetic symbols", () => {
    const result = isIsogram("T-es!?");
    const expectedResult = true;

    expect(result).toBe(expectedResult);
  });

  it("should return false for trailing and leading spaces", () => {
    const result = isIsogram("  Hello  ");
    const expectedResult = false;

    expect(result).toBe(expectedResult);
  });

  it("should return true for nonrepeating numbers", () => {
    const result = isIsogram("0124598");
    const expectedResult = true;

    expect(result).toBe(expectedResult);
  });
});
