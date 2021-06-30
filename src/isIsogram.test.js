'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('test')).toBe('boolean');
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it(`should return false if 'word' 
  contains repeating consecutive letters`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`should return false if 'word' 
  contains repeating non-consecutive letters`, () => {
    expect(isIsogram('mamont')).toBeFalsy();
  });

  it(`should return true if the input string is empty`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return true for a non-empty
  input string wich is an isogram`, () => {
    expect(isIsogram('Kate')).toBeTruthy();
  });
});
