'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('returns true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('returns true for "playgrounds"', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test('returns false for "look"', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test('returns false for "Adam"', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  test('returns true for "isogram"', () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  test('returns false for "repeatingletters"', () => {
    expect(isIsogram('repeatingletters')).toBe(false);
  });

  test('returns true for "uncopyrightable"', () => {
    expect(isIsogram('uncopyrightable')).toBe(true);
  });

  test('is case insensitive', () => {
    expect(isIsogram('Alphabet')).toBe(false);
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });

  test('handles single letter words', () => {
    expect(isIsogram('a')).toBe(true);
    expect(isIsogram('Z')).toBe(true);
  });

  test('handles mixed case', () => {
    expect(isIsogram('IsoGram')).toBe(true);
    expect(isIsogram('mOoSe')).toBe(false);
  });
});
