'use strict';

const { isIsogram } = require('./isIsogram');

describe('isIsogram', () => {
  test('should return true for an empty string', () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  test('should return true for a word with all unique letters', () => {
    expect(isIsogram('playgrounds'))
      .toBe(true);
  });

  test('should return false for a word with repeating letters', () => {
    expect(isIsogram('look'))
      .toBe(false);
  });

  test('should be case-insensitive', () => {
    expect(
      isIsogram('Adam')
    )
      .toBe(false);
  });

  test(
    'should return false for a word with non-consecutive repeating letters',
    () => {
      expect(
        isIsogram('Oops')
      )
        .toBe(false);
    }
  );

  test('should return true for a single-letter word', () => {
    expect(isIsogram('A'))
      .toBe(true);
  });

  test(
    'should return true for a word with mixed cases but no repetitions',
    () => {
      expect(
        isIsogram('DermaToglyphics')
      )
        .toBe(true);
    }
  );

  test('should return false for a long word with repeated letters', () => {
    expect(
      isIsogram('alphabetical')
    )
      .toBe(false);
  });
});
