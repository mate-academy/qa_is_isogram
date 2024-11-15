'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  describe('checkIsogram', () => {
    it('should return true for an empty string', () => {
      expect(checkIsogram('')).toBe(true);
    });

    it('should return true for a string with all unique lowercase characters', () => {
      expect(checkIsogram('playgrounds')).toBe(true);
    });

    it('should return false for a string with consecutive repeating characters', () => {
      expect(checkIsogram('look')).toBe(false);
    });

    it('should return false for a string with non-consecutive repeating characters', () => {
      expect(checkIsogram('Adam')).toBe(false);
    });

    it('should return false for a string with case-insensitive repeating characters', () => {
      expect(checkIsogram('Oops')).toBe(false);
    });

    it('should return true for a mixed-case string with all unique characters', () => {
      expect(checkIsogram('Dermatoglyphics')).toBe(true);
    });

    it('should return false for a mixed-case string with repeated characters', () => {
      expect(checkIsogram('Abba')).toBe(false);
    });
  });

});
