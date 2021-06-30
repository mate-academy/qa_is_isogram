'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('word')).toEqual('boolean');
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('Mom')).toBeFalsy();
  });

  // write more tests here

  it(`should return true if string is empty`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return true if string non-repeating consecutive letters`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });
});
