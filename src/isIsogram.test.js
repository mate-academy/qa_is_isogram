"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it("should work correctly with empty string", () => {
    const result = isIsogram("");

    expect(result).toBeTruthy();
  });

  it("should return true for a valid isogram", () => {
    const result = isIsogram("playgrounds");

    expect(result).toBeTruthy();
  });

  it("should return false for a non-valid isogram", () => {
    const result = isIsogram("adam");

    expect(result).toBeFalsy();
  });

  it("should work case-sensitively", () => {
    const result = isIsogram("Marim");

    expect(result).toBeFalsy();
  });
});
