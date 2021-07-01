'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('kaw')).toBe('boolean');
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('kawK')).toBe(false);
  });

  it(`should check one letter`, () => {
    expect(isIsogram('k')).toBe(true);
  });

  it(`should detect consecutive repetitions`, () => {
    expect(isIsogram('kawW')).toBe(false);
  });

  it(`empty string should be isogram`, () => {
    expect(isIsogram('')).toBe(true);
  });
});
