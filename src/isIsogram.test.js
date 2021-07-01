'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('')).toBe('boolean');
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('ATOM')).toBe(true);
  });

  it(`should return 'true' if the string is empty`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return 'false' if the characters of value are not unique`, () => {
    expect(isIsogram('call')).toBe(false);
  });

  it(`should return 'false' if the value dublicates by a space`, () => {
    expect(isIsogram('atom atom')).toBe(false);
  });

  it(`should return 'true' if the is only one characters of value`, () => {
    expect(isIsogram('s')).toBe(true);
  });
  // write more tests here
});
