'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if isIsogram('')`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return true if isIsogram includes different letters`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`should return true if isIsogram has letters in divers registers`, () => {
    expect(isIsogram('Playgrounds')).toBeTruthy();
  });

  it(`should return false if isIsogram includes identical letters`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`should return false if isIsogram includes identical letters`
    + `in different register`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });
});
