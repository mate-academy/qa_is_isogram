'use strict';

const { isIsogram } = require('./isIsogram');

describe('isIsogram', () => {
  test('returns true for no repeating letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test('returns false for consecutive repeats', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test('returns false for non-consecutive repeats', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  test('returns true for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('returns false for repeating letters', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  test('treats upper and lowercase as same', () => {
    expect(isIsogram('MoOd')).toBe(false);
  });

  test('returns true for single-letter word', () => {
    expect(isIsogram('a')).toBe(true);
  });
});
