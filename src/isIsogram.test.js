'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return a boolean value', () => {
    expect(typeof isIsogram('test')).toBe('boolean');
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a single letter word', () => {
    expect(isIsogram('a')).toBe(true);
    expect(isIsogram('Z')).toBe(true);
  });

  it('should return true for a word with all unique lowercase letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return true for a long word with unique letters', () => {
    expect(isIsogram('subdermatoglyphic')).toBe(true);
  });

  it('should return true for a word with unique letters in mixed case', () => {
    expect(isIsogram('Documentary')).toBe(true);
  });

  it('should return false for consecutive duplicate letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for non-consecutive duplicate letters', () => {
    expect(isIsogram('eleven')).toBe(false);
  });

  it('should return false for duplicates at start and end', () => {
    expect(isIsogram('radar')).toBe(false);
  });

  it('should return false for multiple duplicate letters', () => {
    expect(isIsogram('banana')).toBe(false);
  });

  it('should return false for duplicate letters in mixed case', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return false for consecutive duplicates in mixed case', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it('should return false for two identical letters in different case', () => {
    expect(isIsogram('Aa')).toBe(false);
  });
});
