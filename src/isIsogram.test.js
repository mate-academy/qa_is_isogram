'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  describe('isIsogram === true', () => {
    it('should return true for playgrounds', () => {
      expect(isIsogram('playgrounds')).toBe(true);
    });

    it('should return true for Abc', () => {
      expect(isIsogram('Abc')).toBe(true);
    });

    it('should return true for a single character', () => {
      expect(isIsogram('a')).toBe(true);
    });

    it('should return true for a single character', () => {
      expect(isIsogram('A')).toBe(true);
    });

    it('should return true for an empty string', () => {
      expect(isIsogram('')).toBe(true);
    });
  });

  describe('isIsogram === false', () => {
    it('should return false for a non-isogram', () => {
      expect(isIsogram('look')).toBe(false);
    });

    it('should return false for Adam', () => {
      expect(isIsogram('Adam')).toBe(false);
    });

    it('should return false for Oops', () => {
      expect(isIsogram('Oops')).toBe(false);
    });
  });
});
