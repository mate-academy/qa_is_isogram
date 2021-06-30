'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('word')).toBe('boolean');
  });

  it(`should be not case sensitive`, () => {
    expect(isIsogram('WORD')).toBeTruthy();
  });

  // write more tests here

  it(`should return 'true' if empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return 'false' if string has duplicates letter`, () => {
    expect(isIsogram('develop')).toBeFalsy();
  });

  it(`should work with Cyrillic`, () => {
    expect(isIsogram('караван')).toBeFalsy();
  });
});
