'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return false if similar letters', () => {
    expect(isIsogram('letter')).toBe(false);
  });

  it('should return true empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should be case sensetive', () => {
    expect(isIsogram('LetTEr')).toBe(false);
  });

  it('should return true for single letter', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it('should return false for same letter input', () => {
    expect(isIsogram('aaaaaa')).toBe(false);
  });
});
