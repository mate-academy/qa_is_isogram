'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('word')).toBe('boolean');
  });

  it(`should return 'true' if string is blank`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('WORD')).toBe(true);
  });

  it(`should return 'false' if string has duplicated symbols`,
    () => {
      expect(isIsogram('Wood')).toBe(false);
    });

  it(`should compare similar by writing cyrillic and latin symbols 
    as duplicates`, () => {
    expect(isIsogram('аудіювання')).toBe(false);
  });
});
