'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('shoud return true for empty string', () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`shoud return true if a word has no repeating letters`, () => {
    expect(isIsogram('lemon')).toBeTruthy();
  });

  it(`shoud return false if a word has
    consecutive repeating letters`, () => {
    expect(isIsogram('apple')).toBeFalsy();
  });

  it(`shoud return false if a word has
    non-consecutive repeating letters`, () => {
    expect(isIsogram('dragarys')).toBeFalsy();
  });

  it('shoud be case insensetive', () => {
    expect(isIsogram('Ema')).toBeTruthy();
  });

  it('shoud return true if a word has one letter', () => {
    expect(isIsogram('s')).toBeTruthy();
  });
});
