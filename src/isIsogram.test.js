'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for "playgrounds"', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for "look"', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for "Adam" ', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for "isogram"', () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  it('should return true for "Isogram" (case-insensitive)', () => {
    expect(isIsogram('Isogram')).toBe(true);
  });

  it('should return false for "repetition"', () => {
    expect(isIsogram('repetition')).toBe(false);
  });

  it('should return true for "Blue" (case-insensitive)', () => {
    expect(isIsogram('Blue')).toBe(true);
  });
});
