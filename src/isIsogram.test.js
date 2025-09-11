'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true if no letters given', () => {
    expect(isIsogram('')).toEqual(true);
  });

  it('should return true if one letter is given', () => {
    expect(isIsogram('F')).toEqual(true);
  });

  it('should return true if no letters repeated', () => {
    expect(isIsogram('money')).toEqual(true);
  });

  it('should return false if letter is repeating', () => {
    expect(isIsogram('mum')).toEqual(false);
  });

  it('should return false if small letter repeating with big one', () => {
    expect(isIsogram('Mum')).toEqual(false);
  });
});
