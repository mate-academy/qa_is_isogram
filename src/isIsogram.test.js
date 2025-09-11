'use strict';

describe('isIsogram', () => {

  const { isIsogram } = require('./isIsogram');


    test('returns true for an empty string', () => {
      expect(isIsogram('')).toBe(true);
    });
  
    test('returns true for the word "playgrounds"', () => {
      expect(isIsogram('playgrounds')).toBe(true);
    });
  
    test('returns false for the word "look"', () => {
      expect(isIsogram('look')).toBe(false);
    });
  
    test('returns false for the word "Adam"', () => {
      expect(isIsogram('Adam')).toBe(false);
    });
  
    test('handles words with repeating characters', () => {
      expect(isIsogram('bookkeeper')).toBe(false);
    });
  });