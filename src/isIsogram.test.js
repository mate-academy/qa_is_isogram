'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('look')).toEqual('boolean');
  });

  it(`should be not case sensitive`, () => {
    expect(isIsogram('cAt')).toBe(true);
  });

  // write more tests here

  it(`should return 'true' if string is empty`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return 'true' if all letters in string are different`, () => {
    expect(isIsogram('run')).toBe(true);
  });

  it(`should return 'false' if some letters are the same 
  and are located one after another`, () => {
    expect(isIsogram('see')).toBe(false);
  });

  it(`should return 'false' if the same characters are not 
  next to each other`, () => {
    expect(isIsogram('banan')).toBe(false);
  });

  it(`should return 'false' if there are several identical characters`, () => {
    expect(isIsogram('Incomprehensibilities')).toBe(false);
  });
});
