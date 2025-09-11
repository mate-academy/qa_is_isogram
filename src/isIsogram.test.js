'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for a valid isogram (playgrounds)', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with repeating letters (look)', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for case-insensitive duplicates (Adam)', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return false for mixed case repeating letters (Oops)', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it('should return true for a single-letter word', () => {
    expect(isIsogram('A')).toBe(true);
  });

  it(
    'should return true for all unique letters with mixed cases (AbCdEf)',
    () => {
      expect(isIsogram('AbCdEf')).toBe(true);
    });

  it('should return false for a word with all the same letters (aaaa)', () => {
    expect(isIsogram('aaaa')).toBe(false);
  });

  it('should return true for a long isogram word (background)', () => {
    expect(isIsogram('background')).toBe(true);
  });

  it(
    'should return false if repeated letter is non-consecutive (banana)',
    () => {
      expect(isIsogram('banana')).toBe(false);
    });
});
