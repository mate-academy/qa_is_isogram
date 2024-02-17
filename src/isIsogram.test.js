'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('word.length === 0 -> return: true', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('word has letters only in LOWER case -> return: true', () => {
    const result = isIsogram('shtonda');

    expect(result).toBe(true);
  });

  it('word has letters only in UPPER case -> return: true', () => {
    const result = isIsogram('SHTONDA');

    expect(result).toBe(true);
  });

  it('word has 2 "D" letters -> return: false', () => {
    const result = isIsogram('shtonda dev');

    expect(result).toBe(false);
  });

  it('word has "D" and "d" letters -> return: false', () => {
    const result = isIsogram('Shtonda Dev');

    expect(result).toBe(false);
  });
});
