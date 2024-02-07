'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('Should return false for "look"', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('Should return false for "Adam"', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('Should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });
});
