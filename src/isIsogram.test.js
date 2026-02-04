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
    expect(isIsogram("ooops")).toBe(false);
  });

  it(`many repeating of letters`, () => {
    expect(isIsogram("stttttttraaaaannnngeee")).toBe(false);
  });

  it(`without repeating `, () => {
    expect(isIsogram("playgrounds")).toBe(true);
  });

  it(`ignoring register of letters`, () => {
    expect(isIsogram("LoOk")).toBe(false);
  });
});
