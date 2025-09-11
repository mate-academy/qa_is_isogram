'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be true for empty input`, () => {
    expect(isIsogram('')).toEqual(true);
  });

  it(`should be true for Abcd`, () => {
    expect(isIsogram('Abcd')).toEqual(true);
  });

  it(`should be false for ABCabc`, () => {
    expect(isIsogram('ABCabc')).toEqual(false);
  });

  it(`should be false for Adam`, () => {
    expect(isIsogram('Adam')).toEqual(false);
  });

  it(`should be true for 1 space`, () => {
    expect(isIsogram(' ')).toEqual(true);
  });

  it(`should be false for 2 spaces`, () => {
    expect(isIsogram('  ')).toEqual(false);
  });

  it(`should be false for incorrect example`, () => {
    expect(isIsogram('incorrect example')).toEqual(false);
  });

  it(`should be false for passed`, () => {
    expect(isIsogram('passed')).toEqual(false);
  });

  it(`should be true for failed`, () => {
    expect(isIsogram('failed')).toEqual(true);
  });
});
