'use strict';

const { channel } = require('diagnostics_channel');

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for a word with unique letters: "playgrounds"', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with repeated letters: "look"', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(
    'should return false when the same letter appears in different cases: "Adam"',
    () => {
      expect(isIsogram('Adam')).toBe(false);
    }
  );

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it(
    'should return false for a word with repeating letters and mixed case: "Oops"',
    () => {
      expect(isIsogram('Oops')).toBe(false);
    }
  );

  it('should return true for a single-letter string: "a"', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it('should return true for a long isogram: "background"', () => {
    expect(isIsogram('background')).toBe(true);
  });

  it(
    'should return false for repeating letters far apart: "Alphabet"',
    () => {
      expect(isIsogram('Alphabet')).toBe(false);
    }
  );

  it('should handle all uppercase letters: "ISOGRAM"', () => {
    expect(isIsogram('ISOGRAM')).toBe(true);
  });

  it('should return false for repeated uppercase letters: "PASSword"', () => {
    expect(isIsogram('PASSword')).toBe(false);
  });
});



//My channel
