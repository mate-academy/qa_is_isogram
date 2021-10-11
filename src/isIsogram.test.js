'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(isIsogram).toBeTruthy();
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('Kyiv')).toBeTruthy();
  });

  it(`should return a boolean`, () => {
    expect(isIsogram('qwertyui')).toBeTruthy();
  });

  it(`should return a falsy`, () => {
    expect(isIsogram('qqwerty')).toBeFalsy();
  });

  it(`should return a falsy`, () => {
    expect(isIsogram('Qqwerty')).toBeFalsy();
  });

  it(`should return a true`, () => {
    expect(isIsogram(' ')).toBeTruthy();
  });

  it(`should return a true`, () => {
    expect(isIsogram('213')).toBeTruthy();
  });

  // write more tests here
});
