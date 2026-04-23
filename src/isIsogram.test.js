'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared as a function', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  describe('Basic Isogram Tests', () => {
    it('returns true for a basic isogram: "playgrounds"', () => {
      expect(isIsogram('playgrounds')).toBe(true);
    });

    it('returns true for a basic isogram: "abcdefg"', () => {
      expect(isIsogram('abcdefg')).toBe(true);
    });
  });

  describe('Non-Isogram Tests', () => {
    it('returns false for a non-isogram: "look"', () => {
      expect(isIsogram('look')).toBe(false);
    });

    it('returns false for a non-isogram: "Adam"', () => {
      expect(isIsogram('Adam')).toBe(false);
    });

    it('returns false for a non-isogram: "hello"', () => {
      expect(isIsogram('hello')).toBe(false);
    });
  });

  describe('Empty String Test', () => {
    it('returns true for an empty string', () => {
      expect(isIsogram('')).toBe(true);
    });
  });

  describe('Case Insensitivity Tests', () => {
    it('treats "Dermatoglyphics" as an isogram (case insensitive)', () => {
      expect(isIsogram('Dermatoglyphics')).toBe(true);
    });

    it('treats "Alphabet" as not an isogram (case insensitive)', () => {
      expect(isIsogram('Alphabet')).toBe(false);
    });

    it('treats "AbCdefG" as not an isogram (case insensitive)', () => {
      expect(isIsogram('AbCdefG')).toBe(true);
    });
  });
});
