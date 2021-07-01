'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a Boolean`, () => {
    expect(typeof isIsogram('word')).toBe('boolean');
  });

  it(`should be 'true' if string is blank`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should be 'false' if there are two same symbols in a row`, () => {
    expect(isIsogram('Woord')).toBe(false);
  });

  it(`should be 'false' if if have inconsistent characters`, () => {
    expect(isIsogram('Worod')).toBe(false);
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('Word')).toBe(true);
  });
});
