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
    expect(isIsogram('A')).toBe(true);
  });

  it('should return true for a word with no repeating letters', () => {
    expect(isIsogram('abcdef')).toBe(true);
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('aabbcc')).toBe(false);
  });

  it('should return true for a word with letters in mixed case', () => {
    expect(isIsogram('AbCdEf')).toBe(true);
  });

  it('return false for a word with repeating letters, ignoring case', () => {
    expect(isIsogram('AaBbCc')).toBe(false);
  });

  it('return true for a word with a mix of letters and no repeats', () => {
    expect(isIsogram('AkiT')).toBe(true);
  });

  it('return false for word with repeating letters but different cases', () => {
    expect(isIsogram('MoM')).toBe(false);
  });

  it('should return false for a long word with a repeat in the middle', () => {
    expect(isIsogram('Supercalifragilisticexpialidocious')).toBe(false);
  });
});
