'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean result`, () => {
    expect(typeof isIsogram('boolean')).toBe('boolean');
  });

  it(`shouldn't be case sensitive`, () => {
    expect(isIsogram('Hi')).toBe(true);
  });

  it(`should return 'true' on empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return 'false' on word with 
    identical different case letters`, () => {
    expect(isIsogram('Wow')).toBe(false);
  });

  it(`should return 'false' on word with 
    identical letters(is not isogram)`, () => {
    expect(isIsogram('look')).toBe(false);
  });
});
