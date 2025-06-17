'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a single-letter word', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it('should return false for a word with all same letters', () => {
    expect(isIsogram('aaaaaa')).toBe(false);
  });

  it('should return true for a valid isogram "wonderful"', () => {
    expect(isIsogram('wonderful')).toBe(true);
  });

  it('should return false for a word with repeating letters "there"', () => {
    expect(isIsogram('there')).toBe(false);
  });

  it(
    'should return false for a word with repeating letters '
      + 'regardless of case',
    () => {
      expect(isIsogram('MateAcademy')).toBe(false);
    }
  );
});
