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
    expect(isIsogram('RhCp')).toBe(true);
  });

  it(`should return 'true' for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return 'false' if there are 2 same letters`, () => {
    expect(isIsogram('aqua')).toBe(false);
  });

  it(`should return 'true' if string consists of one letter`, () => {
    expect(isIsogram('S')).toBe(true);
  });

  it(`should return 'true' if string includes special symbol`, () => {
    expect(isIsogram('MoNey$')).toBe(true);
  });

  it(`should return 'true' if input includes space`, () => {
    expect(isIsogram('My LoVe')).toBe(true);
  });
});
