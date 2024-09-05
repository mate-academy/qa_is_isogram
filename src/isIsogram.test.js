'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('Should return false if word contains same letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`Should return false
    if word contains same letters with diff register`, () => {
    expect(isIsogram('Dude')).toBe(false);
  });

  it('Should return true if word does not contains same letters', () => {
    expect(isIsogram('play')).toBe(true);
  });

  it('Should return true if the string is empty', () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`Should return true if word contains mixed casing
    and unique letters`, () => {
    expect(isIsogram('Ground')).toBe(true);
  });

  it('Should return true for single letter', () => {
    expect(isIsogram('a')).toBe(true);
  });
});
