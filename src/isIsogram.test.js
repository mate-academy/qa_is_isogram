'use strict';

const { isIsogram } = require('./isIsogram');

test('should return true for an empty string', () => {
  expect(isIsogram('')).toBe(true);
});

test('should return true for a single letter', () => {
  expect(isIsogram('a')).toBe(true);
});

test('should return true for a word with all unique letters', () => {
  expect(isIsogram('playgrounds')).toBe(true);
  expect(isIsogram('isogram')).toBe(true);
});

test('should return false when the same letter repeats in a row', () => {
  expect(isIsogram('look')).toBe(false);
  expect(isIsogram('abcc')).toBe(false);
});

test('should return false when the same letter repeats not in a row', () => {
  expect(isIsogram('abca')).toBe(false);
  expect(isIsogram('abcdea')).toBe(false);
});

test('should ignore case for a word with unique letters', () => {
  expect(isIsogram('PlayGrounds')).toBe(true);
  expect(isIsogram('ISOGRAM')).toBe(true);
});

test('should treat uppercase and lowercase of a letter as the same', () => {
  expect(isIsogram('Adam')).toBe(false);
  expect(isIsogram('Oops')).toBe(false);
  expect(isIsogram('aA')).toBe(false);
});

test('should return false when the whole word is one letter repeated', () => {
  expect(isIsogram('aaaa')).toBe(false);
});

test('should return a boolean value', () => {
  expect(typeof isIsogram('word')).toBe('boolean');
  expect(typeof isIsogram('look')).toBe('boolean');
});
