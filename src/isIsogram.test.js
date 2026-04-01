'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', function() {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a word with all unique letters', function() {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false for a word
     with repeating non-consecutive letters`, function() {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return false for a word with 
    repeating letters in different cases`, function() {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return false for a word 
    with repeating consecutive letters`, function() {
    expect(isIsogram('Oops')).toBe(false);
  });

  it('should return true for a long word with all unique letters', function() {
    expect(isIsogram('subdermatoglyphic')).toBe(true);
  });

  it('should return true for a single-letter word', function() {
    expect(isIsogram('A')).toBe(true);
  });
});
