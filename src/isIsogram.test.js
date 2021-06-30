'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('adfb')).toBe('boolean');
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('Aboba')).toBeFalsy();
  });

  it(`should return true with empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return false with word = 'Ananas'`, () => {
    expect(isIsogram('Ananas')).toBeFalsy();
  });

  it(`should return true with word = 'Opera'`, () => {
    expect(isIsogram('Opera')).toBeTruthy();
  });

  it(`should return false with word = 'Eerie'`, () => {
    expect(isIsogram('Eerie')).toBeFalsy();
  });
});
