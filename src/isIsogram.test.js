'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('abc')).toBe('boolean');
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('PlayGround')).toBeTruthy();
  });

  it(`should return false when input is 'look'`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`should return false when input is 'LookAdam'`, () => {
    expect(isIsogram('LookAdam')).toBeFalsy();
  });

  it(`should return true when input is 'abcdefj'`, () => {
    expect(isIsogram('abcdefj')).toBeTruthy();
  });

  it(`should return true when input is ''`, () => {
    expect(isIsogram('')).toBeTruthy();
  });
});
// Examples:

// isIsogram('playgrounds') === true
// isIsogram('look') === false
// isIsogram('Adam') === false
// isIsogram('') === true
