'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an isogram "playgrounds"', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return true for an isogram "isogram"', () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return false for a non-isogram "look"', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for a non-isogram "Adam" (case-insensitive)', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return false for a non-isogram "Balloon"', () => {
    expect(isIsogram('Balloon')).toBe(false);
  });

  it('should return false for "AaBbCc" (case-insensitive duplicates)', () => {
    expect(isIsogram('AaBbCc')).toBe(false);
  });

  it('should return true for "abcdef" (all unique letters)', () => {
    expect(isIsogram('abcdef')).toBe(true);
  });
});
