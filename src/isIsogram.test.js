'use strict';

const { isIsogram } = require('./isIsogram');

describe('isIsogram', () => {
  test(
    'should return true for a word without repeating letters',
    () => {
      expect(isIsogram('playgrounds')).toBe(true);
    },
  );

  test(
    'should return false for a word with repeating letters',
    () => {
      expect(isIsogram('look')).toBe(false);
    },
  );

  test(
    'should return false when the same letter appears in different cases',
    () => {
      expect(isIsogram('Adam')).toBe(false);
    },
  );

  test(
    'should return true for an empty string',
    () => {
      expect(isIsogram('')).toBe(true);
    },
  );

  test(
    'should return false for a word with repeating letters ignoring case',
    () => {
      expect(isIsogram('Oops')).toBe(false);
    },
  );
});
