'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for word with no repeating letters', () => {
    expect(isIsogram('playgrounds')).toBe(true); // Ізограма
  });

  it('should return false for word with repeated letters', () => {
    expect(isIsogram('look')).toBe(false); // Повторювані літери
  });

  it(
    'should return false for word with repeated letters, case insensitive',
    () => {
      expect(isIsogram('Adam')).toBe(false);
    });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return false for word with spaces', () => {
    expect(isIsogram('word with spaces')).toBe(false);
  });

  it('should return false for word with mixed case letters', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it('should return true for word with only one letter', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it('should return false for word with repeated letters in uppercase', () => {
    const word = 'HE' + 'LLO';

    expect(isIsogram(word)).toBe(false);
  });
});
