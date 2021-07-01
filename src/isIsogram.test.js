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
    expect(isIsogram('WoRd')).toBeTruthy();
  });

  it(`should return 'true' if the string is empty`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should work with both letters and numbers`, () => {
    expect(isIsogram('KeY453534')).toBeFalsy();
  });

  it(`should return 'true' if 'Omit' is used`, () => {
    expect(isIsogram('Omit')).toBe(true);
  });

  it(`should return 'false' if 'deterrent' is used`, () => {
    expect(isIsogram('deterrent')).toBe(false);
  });
});
