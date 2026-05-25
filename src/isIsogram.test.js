'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return a boolean', () => {
    expect(typeof isIsogram('isogram')).toBe('boolean');
    expect(typeof isIsogram('aba')).toBe('boolean');
  });

  describe('strings without repeated characters', () => {
    it('should return true for "Dermatoglyphics"', () => {
      expect(isIsogram('Dermatoglyphics')).toBe(true);
    });

    it('should return true for "isogram"', () => {
      expect(isIsogram('isogram')).toBe(true);
    });
  });

  describe('strings with repeated characters', () => {
    it('should return false for "aba"', () => {
      expect(isIsogram('aba')).toBe(false);
    });

    it('should return false for "moose"', () => {
      expect(isIsogram('moose')).toBe(false);
    });

    it('should return false for "isIsogram"', () => {
      expect(isIsogram('isIsogram')).toBe(false);
    });
  });

  describe('case insensitivity', () => {
    it('should return false for "Alphabet" (a repeats)', () => {
      expect(isIsogram('Alphabet')).toBe(false);
    });

    it('should treat uppercase and lowercase as the same letter', () => {
      expect(isIsogram('Aa')).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('should return true for an empty string', () => {
      expect(isIsogram('')).toBe(true);
    });

    it('should return true for a single character', () => {
      expect(isIsogram('a')).toBe(true);
    });

    it('should return true for a single uppercase character', () => {
      expect(isIsogram('Z')).toBe(true);
    });
  });

  describe('strings with hyphens', () => {
    it('should return false for "six-year-old" (hyphen repeats)', () => {
      expect(isIsogram('six-year-old')).toBe(false);
    });
  });
});
