'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(isIsogram).toBeTruthy();
  });

  it(`should return an isogram`, () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it(`should return an isogram`, () => {
    expect(isIsogram('Chemistry')).toBeTruthy();
  });

  it(`should return 'true' for empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should be case sensitive ("L" and "l" are 
    considered the same letter)`, () => {
    expect(isIsogram('Likely')).toBeFalsy();
  });
});
