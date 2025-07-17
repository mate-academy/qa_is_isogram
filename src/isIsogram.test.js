'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a simple lowercase isogram', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(
    'should return false for a word ' + 'with consecutive repeating letters',
    () => {
      expect(isIsogram('look')).toBe(false);
    }
  );

  it(
    'should return false for a word with '
      + 'non-consecutive repeating letters',
    () => {
      expect(isIsogram('aba')).toBe(false);
    }
  );

  it(
    'should return false for a word with repeating letters, '
      + 'being case-insensitive',
    () => {
      expect(isIsogram('Adam')).toBe(false);
    }
  );

  it(
    'should return false for a word with consecutive repeating letters, '
      + 'being case-insensitive',
    () => {
      expect(isIsogram('oops')).toBe(false);

      expect(isIsogram('Oops')).toBe(false);
    }
  );

  it('should return true for a long isogram', () => {
    expect(isIsogram('dermatoglyphics')).toBe(true);
  });

  it(
    'should return true for a word with mixed case letters '
      + 'that is an isogram',
    () => {
      expect(isIsogram('HouseWare')).toBe(false);
    }
  );
});
