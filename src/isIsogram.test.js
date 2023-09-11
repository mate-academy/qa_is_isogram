'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  describe('`isIsogram` function', () => {
    it(`should be declared`, () => {
      expect(isIsogram).toBeInstanceOf(Function);
    });
  });

  describe('Empty braces', () => {
    it(`should be an isogram`, () => {
      expect(isIsogram('')).toBe(true);
    });
  });

  describe('`isIsogram` function is case-insensitive', () => {
    it(`should be case-insensitive`, () => {
      expect(isIsogram('Adam')).toBe(false);
      expect(isIsogram('Momo')).toBe(false);
    });
  });

  describe('`false` cases', () => {
    it('should return false for non-isograms', () => {
      expect(isIsogram('look')).toBe(false);
      expect(isIsogram('mama')).toBe(false);
    });
  });

  describe('`true` cases', () => {
    it('should return true for isograms', () => {
      expect(isIsogram('Lock')).toBe(true);
      expect(isIsogram('Venom')).toBe(true);
      expect(isIsogram('playground')).toBe(true);
    });
  });
});
