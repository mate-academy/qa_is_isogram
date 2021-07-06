'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('word')).toBe('boolean');
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('WORD')).toBe(true);
  });

  // write more tests here
  it(`should return 'true' if string is empty`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`'false' if string has duplicated consecutive symbols`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`'false' if string has duplicated non-consecutive symbols`, () => {
    expect(isIsogram('wardrabe')).toBe(false);
  });
});
