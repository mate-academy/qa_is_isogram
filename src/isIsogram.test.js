'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared as a function', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for a word with no repeating letters', () => {
    expect(isIsogram('playgrounds')).toBe(true); // все буквы уникальны
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('look')).toBe(false); // буква "o" повторяется
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true); // пустая строка — изограмма
  });

  it('should return false for a word with non-consecutive repeating', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it('should return false for a word with consecutive repeating', () => {
    expect(isIsogram('success')).toBe(false);
  });

  it('should return true for a word with a single letter', () => {
    expect(isIsogram('A')).toBe(true);
  });

  it('should return false for repeated letters', () => {
    expect(isIsogram('AA')).toBe(false);
  });
});
