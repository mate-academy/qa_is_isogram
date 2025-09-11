'use strict';

const { isIsogram } = require('./isIsogram');

describe('isIsogram', () => {
  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a string with no repeating letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a string with repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(
    'should be case-insensitive and return false for a string with '
    + 'repeating letters in different cases',
    () => {
      expect(isIsogram('Adam')).toBe(false);
    }
  );

  it(
    'should return true for a string with no repeating letters in '
    + 'different cases',
    () => {
      expect(isIsogram('Dermatoglyphics')).toBe(true);
    }
  );

  it(
    'should return false for a string with repeating letters in the same '
    + 'case',
    () => {
      expect(isIsogram('letter')).toBe(false);
    }
  );

  it(
    'should return false for a string with repeating letters in different '
    + 'cases',
    () => {
      expect(isIsogram('Alphabet')).toBe(false);
    }
  );
});
