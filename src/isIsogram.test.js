'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for long valid isogram`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return true for valid isogram with upper case`, () => {
    expect(isIsogram('MonEta')).toBe(true);
  });

  it(`should return false for invalid isogram`, () => {
    expect(isIsogram('moon')).toBe(false);
  });

  it(`should return false for invalid isogram with upper case`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return true for an empty message`, () => {
    expect(isIsogram('')).toBe(true);
  });
  
});
