'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true if word is an isogram', () => {
    expect(isIsogram('playgrounds')).toBe(true);
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });

  it('should return false if word contains repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
    expect(isIsogram('eleven')).toBe(false);
  });

  it('should ignore case sensitivity', () => {
    expect(isIsogram('Adam')).toBe(false); // a & A
    expect(isIsogram('IsoGram')).toBe(true);
  });
});
