'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('copyright')).toBe('boolean');
  });

  it(`should be case sensitive`, () => {
    const result = isIsogram('loOk');

    expect(result).toBeFalsy();
  });

  it(`should return 'true' if the input is empty`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return 'true' if the word is an isogram`, () => {
    expect(isIsogram('playground')).toBeTruthy();
  });

  it(`should return 'false' if the word is not an isogram`, () => {
    expect(isIsogram('abracadabra')).toBeFalsy();
  });
});
