"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be 'true' if 'word' is 'playgrounds'`, () => {
    expect(isIsogram("playgrounds")).toBe(true);
  });

  it(`should be 'false' if 'word' is 'look'`, () => {
    expect(isIsogram("look")).toBe(false);
  });

  it(`should be 'false' if 'word' is 'Adam'`, () => {
    expect(isIsogram("Adam")).toBe(false);
  });

  it(`should be 'true' if 'word' is empty string`, () => {
    expect(isIsogram("")).toBe(true);
  });
});
