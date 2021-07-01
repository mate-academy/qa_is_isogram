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

  it(`should accept mixed register`, () => {
    expect(isIsogram('Ira')).toBe(true);
  });

  it(`should accept mixed register`, () => {
    expect(isIsogram('Alina')).toBe(false);
  });

  it(`should accept an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should not accept double letter`, () => {
    expect(isIsogram('room')).toBe(false);
  });

  it(`should not accept repeating letters`, () => {
    expect(isIsogram('lolipop')).toBe(false);
  });
});
