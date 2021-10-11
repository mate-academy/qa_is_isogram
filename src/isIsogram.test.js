'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('abc')).toBe('boolean');
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('Mam')).toBeFalsy();
  });

  it(`should return true when string is empty`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return false for 'look' string`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`should return true for 'playgrounds' string`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });
  // write more tests here
});
