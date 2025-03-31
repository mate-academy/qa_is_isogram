'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`'word' with no repeats is an isogram`, () => {
    expect(isIsogram('abcdefghijklmnopqrstuvwxyz')).toBeTruthy();
  });

  it(`'' is isogram`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`'word' with consecutive repeats is not an isogram`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`'word' with non-consecutive repeats is not an isogram`, () => {
    expect(isIsogram('test')).toBeFalsy();
  });

  it(`should be case insensitive`, () => {
    expect(isIsogram('Mm')).toBeFalsy();
  });
});
