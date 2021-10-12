'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('some string')).toBe('boolean');
  });

  it(`should return a 'true' if input ''`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should accept letters in Latin`, () => {
    expect(isIsogram('abc')).toBe(true);
  });

  it(`should accept letters in Cyrillic`, () => {
    expect(isIsogram('абв')).toBe(true);
  });

  it(`should be case sensitive when input in capital letters`, () => {
    expect(isIsogram('Abc')).toBe(true);
  });

  it(`should return 'false' if any match is found`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return 'false' if any match is found`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
