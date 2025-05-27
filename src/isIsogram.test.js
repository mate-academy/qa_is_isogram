'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be true when empty`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it('should return true for a word with all unique letters', () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it('should return false when the same letter appears', () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it('should return false if there are repeating letters', () => {
    expect(isIsogram('Oops')).toBeFalsy();
  });

  it('should return true for a one-letter word', () => {
    expect(isIsogram('A')).toBeTruthy();
  });

  it('should return true for a one-letter word with different case', () => {
    expect(isIsogram('a')).toBeTruthy();
  });

  it('should return true for a long isogram with mixed case', () => {
    expect(isIsogram('Unforgivable')).toBeTruthy();
  });

  it('should return false for a word with all identical letters', () => {
    expect(isIsogram('aaa')).toBeFalsy();
  });

  it('should return false for a word with non-con repeating letters', () => {
    expect(isIsogram('banana')).toBeFalsy();
  });

  it('should return true for a mixed case isogram', () => {
    expect(isIsogram('MaChInE')).toBeTruthy();
  });
});
