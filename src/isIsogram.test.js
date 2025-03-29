"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be an 'isogram'`, () => {
    expect(isIsogram("playgrounds")).toBe(true);
    expect(isIsogram("look")).toBe(false);
    expect(isIsogram("Adam")).toBe(false);
  });

  it(`should be an empty string is a 'isogram'`, () => {
    expect(isIsogram("")).toBe(true);
  });

  it(`should return true for a word
      with all unique letters regardless of case`, () => {
    expect(isIsogram("AbCsXzUg")).toBe(true);
  });

  it(`should return false
      for a word with letters appearing in different cases`, () => {
    expect(isIsogram("aAbC")).toBe(false);
  });
});
