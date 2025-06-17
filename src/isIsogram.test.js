'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true if the word is an isogram', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it('should return false if the word is not an isogram', () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it('should be case-insensitive', () => {
    const result = isIsogram('Dermatoglyphics');

    expect(result).toBe(true);
  });

  // eslint-disable-next-line
  it('should return false if the word has duplicate letters in different cases', () => {
    const result = isIsogram('Alphabet');

    expect(result).toBe(false);
  });

  it('should return true for an empty string', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });
});
