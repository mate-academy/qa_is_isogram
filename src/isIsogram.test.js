'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('function return should be a boolean', () => {
    expect(typeof isIsogram(''))
      .toBe('boolean');
  });

  it('should return true for "abcd"', () => {
    expect(isIsogram('abcd'))
      .toEqual(true);
  });

  it('should return false for "abca"', () => {
    expect(isIsogram('abca'))
      .toEqual(false);
  });

  it('should throw an error for numbers as numbers', () => {
    expect(() => {
      isIsogram(1234);
    }).toThrow(new Error('word.toLowerCase is not a function'));
  });

  it('should correctly work with numbers as string', () => {
    expect(isIsogram('1234'))
      .toEqual(true);

    expect(isIsogram('1231'))
      .toEqual(false);
  });

  it('should return true for phrase with 1 space', () => {
    expect(isIsogram('a b'))
      .toEqual(true);
  });

  it('should return false for phrase with 2 or more spaces', () => {
    expect(isIsogram('a b c'))
      .toEqual(false);
  });
});
