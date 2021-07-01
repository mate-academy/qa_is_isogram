'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('')).toBe('boolean');
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('MmNn')).toBeFalsy();
  });

  it(`should return 'true' if word = 'Palindrom'`, () => {
    expect(isIsogram('Palindrom')).toBeTruthy();
  });

  it(`should return 'true' if word = ''`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return 'false' if letters 
  are no unique: word = 'look'`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });
});
