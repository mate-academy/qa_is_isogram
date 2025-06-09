'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');
  
  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for a single character`, () => {
    expect(isIsogram('a')).toBe(true);
    expect(isIsogram('Z')).toBe(true);
  });

  it(`should return true for a string with all unique characters`, () => {
    expect(isIsogram('abc')).toBe(true);
    expect(isIsogram('aBc')).toBe(true);
    expect(isIsogram('123')).toBe(true);
    expect(isIsogram('!@#')).toBe(true);
  });

  it(`should return false for a string with repeated characters`, () => {
    expect(isIsogram('aa')).toBe(false);
    expect(isIsogram('aA')).toBe(false);
    expect(isIsogram('abcda')).toBe(false);
    expect(isIsogram('1231')).toBe(false);
    expect(isIsogram('!@#@')).toBe(false);
  });

  it(`should handle mixed case characters`, () => {
    expect(isIsogram('aBcDeF')).toBe(true);
    expect(isIsogram('aBcDeFa')).toBe(false);
  });
});
