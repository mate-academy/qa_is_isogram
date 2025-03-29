"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram("")).toBe(true);
  });

  it(`should return false for consecutive repeating letters`, () => {
    expect(isIsogram("book")).toBe(false);
  });

  it(`should return false for non-consecutive repeating letters`, () => {
    expect(isIsogram("creative")).toBe(false);
  });

  it(`should work for any letter case`, () => {
    expect(isIsogram("room")).toBe(false);
    expect(isIsogram("Adam")).toBe(false);
  });

  it(`should return true if there are no repeating letters`, () => {
    expect(isIsogram("mate")).toBe(true);
  });
});
