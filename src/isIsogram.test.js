'use strict';

const { isIsogram } = require('./isIsogram');

describe(`test isIsogram function`, () => {
  it(`'isIsogram' should return true if argument = ''`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`'isIsogram' should return false if argument = 'llll'`, () => {
    expect(isIsogram('llll')).toBeFalsy();
  });

  it(`'isIsogram' should return false if argument = 'Ll'`, () => {
    expect(isIsogram('Ll')).toBeFalsy();
  });

  it(`'isIsogram' should return true if argument = one letter (L)`, () => {
    expect(isIsogram('L')).toBeTruthy();
  });

  it(`'isIsogram' should return true if argument = 'AbCOk'`, () => {
    expect(isIsogram('AbCOk')).toBeTruthy();
  });

  it(`'isIsogram' should return error message if argument = NaN`, () => {
    expect(() => isIsogram(NaN)).toThrow();
  });

  it(`'isIsogram' should return error message if argument = undefined`, () => {
    expect(() => isIsogram(undefined)).toThrow();
  });

  it(`'isIsogram' should return if argument = one letter (l)`, () => {
    expect(isIsogram('l')).toBeTruthy();
  });
});
