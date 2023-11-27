'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for isogram words`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`should return true for the empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return true for a single letter string`, () => {
    expect(isIsogram('а')).toBeTruthy();
  });

  it(`should return true for an isogram word with two letters`, () => {
    expect(isIsogram('Ва')).toBeTruthy();
  });

  it(`should return true for isogram words`
  + `which includes upper letters`, () => {
    expect(isIsogram('Home')).toBeTruthy();
  });

  it(`should return true for an isogram word`
  + `with only uppercase letters`, () => {
    expect(isIsogram('ВRLMS')).toBeTruthy();
  });

  it(`should return false for non-isogram words`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`should return false for non-isogram words`
  + `which includes upper letters`, () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it(`should return false for a non-isogram word`
  + `with two uppercase letters`, () => {
    expect(isIsogram('BB')).toBeFalsy();
  });
});
