'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('mate')).toEqual('boolean');
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('MaTe')).toBeTruthy();
  });

  it(`should return false if repeated characters are in diff register`, () => {
    expect(isIsogram('ArRay')).toBeFalsy();
  });

  it(`should return true if string contains non-repeating letters`, () => {
    expect(isIsogram('abcdefgh')).toBeTruthy();
  });
});
