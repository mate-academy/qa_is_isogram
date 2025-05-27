'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(
    'should return true for empty string (empty string is an isogram)',
    () => {
      expect(isIsogram('')).toBe(true);
    }
  );

  it(
    'should return true for single letter word '
      + '(one letter is always isogram)',
    () => {
      expect(isIsogram('a')).toBe(true);
    }
  );

  it('should return true for typical isogram "isogram"', () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  it(
    'should return false for non-consecutive repeating letters "eleven"',
    () => {
      expect(isIsogram('eleven')).toBe(false);
    }
  );

  it(
    'should return false for consecutive repeating letters "letter"',
    () => {
      expect(isIsogram('letter')).toBe(false);
    }
  );

  it(
    'should return false for case-insensitive duplicate "Alphabet"',
    () => {
      expect(isIsogram('Alphabet')).toBe(false);
    }
  );

  it(
    'should return true for long isogram word "Dermatoglyphics"',
    () => {
      expect(isIsogram('Dermatoglyphics')).toBe(true);
    }
  );

  it(
    'should return false for all-uppercase word with repeats '
      + '"MISSISSIPPI"',
    () => {
      expect(isIsogram('MISSISSIPPI')).toBe(false);
    }
  );

  it(
    'should return true for very long isogram "subdermatoglyphic"',
    () => {
      expect(isIsogram('subdermatoglyphic')).toBe(true);
    }
  );

  it(
    'should return false for mixed case repeating letter "moOse"',
    () => {
      expect(isIsogram('moOse')).toBe(false);
    }
  );
});
