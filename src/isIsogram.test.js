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

  it(`should return a boolean if there are no identical 
  letters in the word`, () => {
    expect(isIsogram('qwertyui')).toBeTruthy();
  });

  it(`should return a falsy if there are identical letters in the word`, () => {
    expect(isIsogram('qqwerty')).toBeFalsy();
  });

  it(`should return a falsy if there are one capital letter the same 
  as one small letter`, () => {
    expect(isIsogram('Qqwerty')).toBeFalsy();
  });

  it(`should return a true if isogram are empty`, () => {
    expect(isIsogram(' ')).toBeTruthy();
  });

  it(`should return a true if isogram no contain the same number`, () => {
    expect(isIsogram('213')).toBeTruthy();
  });

  // write more tests here
});
