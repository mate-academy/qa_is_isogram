'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for empty string (including one space) `, () => {
    expect(isIsogram('')).toBe(true);
    expect(isIsogram(' ')).toBe(true);
  });

  it('should return true for single character string', () => {
    expect(isIsogram('a')).toBe(true);
    expect(isIsogram('Z')).toBe(true);
  });

  it('should return true for isogram word (all unique letters)', () => {
    expect(isIsogram('ioGram')).toBe(true);
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for multiple spaces', () => {
    expect(isIsogram('  ')).toBe(false);
    expect(isIsogram('a  a')).toBe(false);
    expect(isIsogram('isog ram ')).toBe(false);
  });

  it(
    'should return false if word has duplicate letters'
      + ' (case insensitive)',
    () => {
      expect(isIsogram('Adam')).toBe(false);
      expect(isIsogram('aba')).toBe(false);
    }
  );
});
