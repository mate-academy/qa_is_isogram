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

  it(`should be case sensitive`, () => {
    expect(isIsogram('Chemistry')).toBeTruthy();
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('')).toBeTruthy();
  });
});
