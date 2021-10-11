'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram).toBeTruthy();
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('PlayGround')).toBeTruthy();
  });

  it(`should return false with similar letters`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`should return false with similar letters in differnt
  cases`, () => {
    expect(isIsogram('LookAdam')).toBeFalsy();
  });

  it(`should return true with different letters`, () => {
    expect(isIsogram('abcdefj')).toBeTruthy();
  });

  it(`should return true empty value`, () => {
    expect(isIsogram('')).toBeTruthy();
  });
});
// Examples:

// isIsogram('playgrounds') === true
// isIsogram('look') === false
// isIsogram('Adam') === false
// isIsogram('') === true
