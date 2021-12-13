'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean value`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return 'true' for '' input`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return 'true' for a word with one letter in it('i')`, () => {
    expect(isIsogram('i')).toBeTruthy();
  });

  it(`should return 'true' for a word with no repeating 
    letters in it ('talk')`, () => {
    expect(isIsogram('talk')).toBeTruthy();
  });

  it(`should return 'true' for a word with no repeating 
    letters and with capital letters in it ('Milk')`, () => {
    expect(isIsogram('MiLk')).toBeTruthy();
  });

  it(`should return 'false' for a word with repeating consecutive
  letters('call')`, () => {
    expect(isIsogram('call')).toBeFalsy();
  });

  it(`should return 'false' for a word with non-consecutive repeating 
  letters('expectations')`, () => {
    expect(isIsogram('expectations')).toBeFalsy();
  });

  it(`should return 'false' for a word with repeating 
letters and with capital letters in it ('FalLen')`, () => {
    expect(isIsogram('FalleN')).toBeFalsy();
  });
});
