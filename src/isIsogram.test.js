'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('word')).toEqual('boolean');
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it(`should return 'true' if the incoming data is empty`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return 'true' if the input is one letter`, () => {
    expect(isIsogram('L')).toBeTruthy();
  });

  it(`should return 'false' if there are identical letters in the input word`,
    () => {
      expect(isIsogram('Izotops')).toBeFalsy();
    });

  it(`must return 'true' if there are no identical letters in the word`, () => {
    expect(isIsogram('clear')).toBeTruthy();
  });
});
