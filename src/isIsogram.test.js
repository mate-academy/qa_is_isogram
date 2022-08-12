'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return boolean type', () => {
    expect(typeof isIsogram(' ')).toEqual('boolean');
  });

  it('should return true for empty input string', () => {
    expect(isIsogram('')).toEqual(true);
  });

  it('should return true when string consist of an only one letter', () => {
    expect(isIsogram('B')).toEqual(true);
  });

  it('should work with string that includes spaces', () => {
    expect(isIsogram('abc  def')).toEqual(false);
  });

  it('should be case insensetive', () => {
    expect(isIsogram('aA')).toEqual(false);
  });

  it('should return true if each letter in string occurs only once', () => {
    expect(isIsogram('abcdefghijklmnop')).toEqual(true);
  });
});
