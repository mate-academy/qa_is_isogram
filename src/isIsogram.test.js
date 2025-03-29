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

  it("should return true if value equal empty string", () => {
    expect(isIsogram("")).toBeTruthy();
  });

  it("should be not case sensitive ", () => {
    expect(isIsogram("a")).toEqual(isIsogram("A"));
  });

  it("should return true to single char", () => {
    expect(isIsogram("a")).toBeTruthy();
  });

  it("should return false to doubled chars", () => {
    expect(isIsogram("aA")).toBeFalsy();
  });
});
