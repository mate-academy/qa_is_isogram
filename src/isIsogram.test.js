"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it("should be declared", () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it("should throw error if argument not provided", () => {
    try {
      isIsogram();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("should return boolean value", () => {
    expect(isIsogram("")).toBeInstanceOf(Boolean);
  });

  it("should return true if value equal empty string", () => {
    expect(isIsogram("")).toBe(true);
  });

  it("should return true to doubled chars", () => {
    expect(isIsogram("aA")).toBe(false);
  });

  it("should be not case sensitive ", () => {
    expect(isIsogram("a")).toEqual(isIsogram("A"));
  });

  it("should return true to single char", () => {
    expect(isIsogram("a")).toBe(true);
  });

  it("should return false to doubled chars", () => {
    expect(isIsogram("aA")).toBe(false);
  });
});
