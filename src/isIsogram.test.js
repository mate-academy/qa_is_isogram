"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it("should be declared", () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it("should ignore register", () => {
    const res = isIsogram("lOok");

    expect(res).toBe(false);
  });

  it("the empty string is an isogram", () => {
    const res = isIsogram("");

    expect(res).toBe(true);
  });

  it("should return true if the characters are unique", () => {
    const res = isIsogram("playgrounds");

    expect(res).toBe(true);
  });
});
