'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a word with unique letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for "Adam" (case insensitive)', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return false for "Oops" (case insensitive)', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it('should return true for "Dermatoglyphics" (case insensitive)', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });

  it('should return true for "Ambidextrously" (case insensitive)', () => {
    expect(isIsogram('Ambidextrously')).toBe(true);
  });

  it('should return false for "Banana" (case insensitive)', () => {
    expect(isIsogram('Banana')).toBe(false);
  });

  it('should return true for "Coding" (case insensitive)', () => {
    expect(isIsogram('Coding')).toBe(true);
  });

  it('should return false for "Programming" (case insensitive)', () => {
    expect(isIsogram('Programming')).toBe(false);
  });
});
