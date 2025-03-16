'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if an empty string is entered`, () => {
    expect(isIsogram(''))
      .toBeTruthy();
  });

  it(`should return true if an isogram is entered`, () => {
    expect(isIsogram('beach'))
      .toBeTruthy();
  });

  it(`should return false if a word with repeating letters is entered`, () => {
    expect(isIsogram('toothpick'))
      .toBeFalsy();
  });

  it(`should return false if a word with identical letters 
    in different cases is entered`, () => {
    expect(isIsogram('toOthpick'))
      .toBeFalsy();
  });

  it(`should return false if a word with repeating consecutive 
    parts is entered`, () => {
    expect(isIsogram('bilabila'))
      .toBeFalsy();
  });

  it(`should return true if a single letter is entered`, () => {
    expect(isIsogram('q'))
      .toBeTruthy();
  });

  it(`should return true if a long isogram is entered`, () => {
    expect(isIsogram('abcdefghijklmnopqrstuvwxyz'))
      .toBeTruthy();
  });

  it(`should return true if two identical letters from 
    different alphabets are entered`, () => {
    expect(isIsogram('aа'))
      .toBeTruthy();
  });
});
