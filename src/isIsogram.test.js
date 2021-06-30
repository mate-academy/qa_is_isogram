'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('word')).toBe('boolean');
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('WORD')).toBe(true);
  });

  it(`should return 'true' if string is blank`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return 'false' if string has duplicated consecutive symbols`,
    () => {
      expect(isIsogram('School')).toBe(false);
    });

  it(`should return 'false' if string has duplicated inconsecutive symbols`,
    () => {
      expect(isIsogram('Nikita')).toBe(false);
    });

  it(`should treat Cyrillic symbols as valid`, () => {
    expect(isIsogram('Обед')).toBe(true);
  });

  it(`should compare similar by writing cyrillic and latin symbols 
  as duplicates`, () => {
    expect(isIsogram('Аннa')).toBe(false);
  });
});
