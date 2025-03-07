'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a word with all unique letters', () => {
    expect(isIsogram('background')).toBe(true);
    expect(isIsogram('jumble')).toBe(true);
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
    expect(isIsogram('Oops')).toBe(false);
  });

  it('should be case insensitive', () => {
    expect(isIsogram('Adam')).toBe(false);
    expect(isIsogram('Goose')).toBe(false);
  });
});
