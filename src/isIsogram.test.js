'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for a valid isogram "playgrounds"', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for word with repeated letters "look"', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for mixed-case duplicate letters "Adam"', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return false for capital duplicate letters "Oops"', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it('should return true for single letter word "x"', () => {
    expect(isIsogram('x')).toBe(true);
  });

  it('should return true for all unique letters in mixed case "Dermatoglyphics"', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });

  it('should return false when word has repeating letters non-consecutively', () => {
    expect(isIsogram('banana')).toBe(false);
  });

  it('should return true when word contains all alphabet letters without repetition', () => {
    expect(isIsogram('abcdefghijklmnpqrstuvwxyz')).toBe(true);
  });
});
