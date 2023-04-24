'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if users nothing enters`, () => {
    expect(isIsogram(''))
      .toBeTruthy();
  });

  it(`should return true if users enters isogram`, () => {
    expect(isIsogram('beach'))
      .toBeTruthy();
  });

  it(`should return false if users enters repeating letters`, () => {
    expect(isIsogram('toothpick'))
      .toBeFalsy();
  });

  it(`should return false if users enters word with 
    identical letters in different cases`, () => {
    expect(isIsogram('toOthpick'))
      .toBeFalsy();
  });

  it(`should return false if users enters word repeating 
    consecutive parts`, () => {
    expect(isIsogram('bilabila'))
      .toBeFalsy();
  });

  it(`should return true if users enters one letter`, () => {
    expect(isIsogram('q'))
      .toBeTruthy();
  });

  it(`should return true if users enters long isogram`, () => {
    expect(isIsogram('abcdefghijklmnopqrstuvwxyz'))
      .toBeTruthy();
  });

  it(`should return true if users enters two identical letters 
    but different alphabets`, () => {
    expect(isIsogram('aа'))
      .toBeTruthy();
  });
});
