'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for Isogram`, () => {
    expect(isIsogram('machine')).toBe(true);
  });

  it(`should return false if letters are duplicated`, () => {
    expect(isIsogram('programmer')).toBe(false);
  });

  it(`should ignore case`, () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
    expect(isIsogram('aba')).toBe(false);
    expect(isIsogram('moOse')).toBe(false);
  });
});
