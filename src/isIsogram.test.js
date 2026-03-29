'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram)
      .toBeInstanceOf(Function);
  });

  it('should return true for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for isograms', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
    expect(isIsogram('isogram')).toBe(true);
    expect(isIsogram('subdermatoglyphic')).toBe(true);
  });

  it('should return false for words with repeating letters', () => {
    expect(isIsogram('hello')).toBe(false);
    expect(isIsogram('isIsogram')).toBe(false);
    expect(isIsogram('aba')).toBe(false);
  });

  it('should be case insensitive', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
    expect(isIsogram('dermatoglyphics')).toBe(true);
  });
});
