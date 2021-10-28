'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('playgrounds')).toBe('boolean');
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('loOk')).toEqual(false);
  });

  it(`should return 'true' when input is '')`, () => {
    expect(isIsogram('')).toEqual(true);
  });

  it(`should return 'true' when 
  input word that has no repeating letters `, () => {
    expect(isIsogram('playgrounds')).toEqual(true);
  });

  it(`should return 'false' when 
  input word that has repeating letters '')`, () => {
    expect(isIsogram('look')).toEqual(false);
  });

  it(`should return 'false' when 
  input word that has repeating letters '')`, () => {
    expect(isIsogram('look')).toEqual(false);
  });
});
