'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('glass')).toEqual('boolean');
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('Book')).toBeFalsy();
  });

  it(`should return true if string is empty`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return true if string has no repeating letters`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });
});
