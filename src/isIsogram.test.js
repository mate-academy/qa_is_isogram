'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('word')).toBe('boolean');
  });

  it(`empty string is an isogram`, () => {
    expect(isIsogram(' ')).toBe(true);
  });

  it(`should NOT be case sensitive`, () => {
    expect(isIsogram('Man')).toBe(true);
  });

  it(`should return false is word is NOT an isogram`, () => {
    expect(isIsogram('MateAcademy')).toBe(false);
  });

  it(`should return true is word is an isogram`, () => {
    expect(isIsogram('QaIsMe')).toBe(true);
  });
});
