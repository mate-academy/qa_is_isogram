'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('Adam')).toBe('boolean');
  });

  it(`shouldn't be case sensitive`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return true if one letter is entered`, () => {
    expect(isIsogram('A')).toBe(true);
  });

  it(`should return true if no letters are entered`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true if the word 
  does not repeat letters`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false if there are 
  duplicate letters in the word`, () => {
    expect(isIsogram('letters')).toBe(false);
  });

  // write more tests here
});
