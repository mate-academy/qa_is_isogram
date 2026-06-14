"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`playgrounds should return TRUE`, () => {
    expect(isIsogram("playgrounds")).toBe(true);
  });

  it(`look should return False`, () => {
    expect(isIsogram("look")).toBe(false);
  });

  it(`Adam should return False`, () => {
    expect(isIsogram("Adam")).toBe(false);
  });

  it(`Empty should return True`, () => {
    expect(isIsogram("")).toBe(true);
  });

  it(`Oops should return False`, () => {
    expect(isIsogram("Oops")).toBe(false);
  });
});
