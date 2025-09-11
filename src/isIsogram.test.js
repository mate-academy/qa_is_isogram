'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for the isogram', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it('should return false for the non isogram', () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it('should return ture for the empty strng', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('should return ture for the single character', () => {
    const result = isIsogram('a');

    expect(result).toBe(true);
  });

  it('should return false for a word with the same letter in different cases',
    () => {
      const result = isIsogram('Alphabet');

      expect(result).toBe(false);
    });

  it(
    'should return true for a word with spaces'
    + 'and special characters that is an isogram',
    () => {
      const result = isIsogram('isogram! #$');

      expect(result).toBe(true);
    });

  it('should return false for a word with repeating non-alphabet characters',
    () => {
      const result = isIsogram('!!');

      expect(result).toBe(false);
    });

  it('should return true for a long word that is an isogram',
    () => {
      const result = isIsogram('subdermatoglyphic');

      expect(result).toBe(true);
    });
});
