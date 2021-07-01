'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('word')).toBe('boolean');
  });

  it(`shouldn't be case sensitive`, () => {
    expect(isIsogram('WORD')).toBe(true);
  });

  it(`should return true if input is empty`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return 'false' if string has duplicated consecutive symbols`,
    () => {
      expect(isIsogram('foo')).toBe(false);
    });

  it(`should return 'false' if string has duplicated non-consecutive symbols`,
    () => {
      expect(isIsogram('Taras')).toBe(false);
    });
});
