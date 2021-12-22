'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return true for isogram as word "isogram"`, () => {
    expect(isIsogram('isogram')).toBeTruthy();
  });

  it(`should return false for non-isogram word as "every"`, () => {
    expect(isIsogram('every')).toBeFalsy();
  });

  it(`should return false for capitalized non-isogram word
  as "Alabama"`, () => {
    expect(isIsogram('Alabama')).toBeFalsy();
  });
});
