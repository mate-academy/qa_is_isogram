'use strict';

const { isIsogram } = require('./isIsogram');

test('"Dermatoglyphics" is an isogram', () => {
  expect(isIsogram('Dermatoglyphics')).toBe(true);
});

test('"aba" is not an isogram', () => {
  expect(isIsogram('aba')).toBe(false);
});

test('"moOse" is not an isogram (case-insensitive)', () => {
  expect(isIsogram('moOse')).toBe(false);
});

test('"isogram" is an isogram', () => {
  expect(isIsogram('isogram')).toBe(true);
});

test('" " (empty string) is an isogram', () => {
  expect(isIsogram('')).toBe(true);
});
