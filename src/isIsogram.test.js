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
    expect(isIsogram('AbcdEf')).toBe(true);
  });

  it(`should return "true" for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for 1 letter in string`, () => {
    expect(isIsogram('A')).toBe(true);
  });

  it(`should return "false" if there are 2 same
  letters in the string`, () => {
    expect(isIsogram('Pass')).toBe(false);
  });

  it(`should return "true" if there are an empty space in word`, () => {
    expect(isIsogram('My Friend')).toBe(true);
  });

  it(`should return "true" if there are a special symbol in word`, () => {
    expect(isIsogram('My%Friend')).toBe(true);
  });
});
