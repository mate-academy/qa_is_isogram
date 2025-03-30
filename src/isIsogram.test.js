"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`Should return true if 'word' length is equal to 0`, () => {
    expect(isIsogram("")).toBeTruthy();
  });

  it(`Should return false if 'word' does not have unique chars`, () => {
    expect(isIsogram("Oops")).toBeFalsy();
  });

  it(`Should return true if 'word' has unique chars`, () => {
    expect(isIsogram("qwerty")).toBeTruthy();
  });

  it(`Should return false if 'word' has upper and lower case`, () => {
    expect(isIsogram("Qqwerty")).toBeFalsy();
  });

  it(`Should return true if 'word' has different upper and lower case`, () => {
    expect(isIsogram("QwerTy")).toBeTruthy();
  });
});
