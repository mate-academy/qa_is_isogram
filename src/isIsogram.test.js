'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    const res = isIsogram('word');

    expect(typeof res).toBe('boolean');
  });

  it(`should be not case sensitive`, () => {
    expect(isIsogram('Word')).toBe(true);
  });

  it(`should return true if empty string in isSogram`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return true if word has no repeating letters`, () => {
    expect(isIsogram('flatron')).toBe(true);
  });

  it(`should return true if word has one space`, () => {
    expect(isIsogram('fas tir')).toBe(true);
  });
});
