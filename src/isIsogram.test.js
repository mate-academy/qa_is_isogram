'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('')).toBe('boolean');
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('Vasylyna')).toBe(false);
  });

  it(`should return 'false' for words with the same letters`, () => {
    expect(isIsogram('Lviv')).toBe(false);
  });

  it(`should return 'true' if the string is empty`, () => {
    expect(isIsogram('')).toBe(true);
  });
});
