'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return this for "look"', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return this for "Adam"', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return this for the empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return this for "Mint"', () => {
    expect(isIsogram('Mint')).toBe(true);
  });

  it('should return this for "Dohli rysaku"', () => {
    expect(isIsogram('Dohli rysaku')).toBe(true);
  });
});
