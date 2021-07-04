'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('abc')).toBe('boolean');
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('SensitIvE')).toBe(false);
  });

  it(`should return 'true' with empty string ''`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return 'false' when repeating letters arranged consecutive`,
    () => {
      expect(isIsogram('isogrram')).toBe(false);
    });

  it(`should return 'false' when repeating letters arranged non-consecutive`,
    () => {
      expect(isIsogram('isograma')).toBe(false);
    });

  it(`should return 'true' if string is isogram`, () => {
    expect(isIsogram('qwertyuiop')).toBeTruthy();
  });
});
