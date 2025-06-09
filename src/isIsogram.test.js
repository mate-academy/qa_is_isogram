'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('returns true for word with all unique letters ("playgrounds")',
    () => { expect(isIsogram('playgrounds')).toBe(true);
    });

  it('returns false for word with repeated letters ("look")',
    () => {
      expect(isIsogram('look')).toBe(false); // repeated 'o'
    });

  it('returns false when same letter appears in different cases ("Adam")',
    () => {
      expect(isIsogram('Adam')).toBe(false); // 'A' and 'a'
    });

  it('returns true for an empty string',
    () => {
      expect(isIsogram('')).toBe(true);
    });

  it('returns false for word with repeated letters in cases ("Oops")',
    () => {
      expect(isIsogram('Oops')).toBe(false); // 'o' and 'O'
    });

  it('returns true for single-letter word ("x")',
    () => {
      expect(isIsogram('x')).toBe(true);
    });

  it(
    'returns true for mixed case unique letters ("Subdermatoglyphic")',
    () => {
      expect(isIsogram('Subdermatoglyphic')).toBe(true);
    }
  );

  it(
    'returns false for word with non-consecutive repeated letters ("banana")',
    () => {
      expect(isIsogram('banana')).toBe(false);
    }
  );
});
