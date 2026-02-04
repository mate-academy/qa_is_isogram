/* eslint-disable quotes */
"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`empty input`, () => {
    expect(isIsogram("")).toBe(true);
  });

  it(`repeating of letters`, () => {
    expect(isIsogram("look")).toBe(false);
  });

  it(`without repeating `, () => {
    expect(isIsogram("playgrounds")).toBe(true);
  });

  it(`ignoring register of letters`, () => {
    expect(isIsogram("Adam")).toBe(false);
  });
});
