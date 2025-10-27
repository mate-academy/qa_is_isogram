"use strict";

describe("isIsogram", () => {
  const { isIsogram } = require("./isIsogram");

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`unique letters`, () => {
    const result = isIsogram("abcdefghijklmnopqrstuvwxyz");

    expect(result).toBeTruthy();
  });

  it(`equal letters`, () => {
    const result = isIsogram("abcdefghijklmnopqrstuvwxyza");
    expect(result).toBeFalsy();
  });

  it(`different BIG letters`, () => {
    const result = isIsogram("ABCD");
    expect(result).toBeTruthy();
  });

  it(`equal BIG letters`, () => {
    const result = isIsogram("ABCDA");
    expect(result).toBeFalsy();
  });

  it(`BIG and SMALL letters`, () => {
    const result = isIsogram("AbcdefghijKLmnopqrstuvwxyzA");
    expect(result).toBeFalsy();
  });

  it(`different numbers to string`, () => {
    const result = isIsogram("1234567890");
    expect(result).toBeTruthy();
  });

  it(`equal numbers to string`, () => {
    const result = isIsogram("112345678900");
    expect(result).toBeFalsy();
  });

  it(`different simbols to string`, () => {
    const result = isIsogram("!@#$%^&*()_+=");
    expect(result).toBeTruthy();
  });

  it(`equal simbols to string`, () => {
    const result = isIsogram("!!@#$%^&*()_+==");
    expect(result).toBeFalsy();
  });

  it(`'word' === playgrounds`, () => {
    const result = isIsogram("playgrounds");
    expect(result).toBeTruthy();
  });

  it(`'word' === look`, () => {
    const result = isIsogram("look");
    expect(result).toBeFalsy();
  });

  it(`'word' === Adam`, () => {
    const result = isIsogram("Adam");
    expect(result).toBeFalsy();
  });

  it(`'word' === Oops`, () => {
    const result = isIsogram("Oops");
    expect(result).toBeFalsy();
  });

  it(`with empty string`, () => {
    const result = isIsogram("");
    expect(result).toBeTruthy();
  });
});
