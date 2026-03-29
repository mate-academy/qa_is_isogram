'use strict';

const isIsogram = require('./isIsogram');

test('returns true for a word with all unique letters', () => {
  expect(isIsogram('playgrounds')).toBe(true);
});

test('returns false when a word contains repeating consecutive letters', () => {
  expect(isIsogram('look')).toBe(false);
});

test('returns false when a word contains repeating non-consecutive letters', () => {
  expect(isIsogram('Oops')).toBe(false);
});

test('is case-insensitive when checking for repeated letters', () => {
  expect(isIsogram('Adam')).toBe(false);
});

test('treats an empty string as an isogram', () => {
  expect(isIsogram('')).toBe(true);
});
