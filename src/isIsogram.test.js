'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(isIsogram('abc')).toBeTruthy();
    /*
    Подскажите, как можно сделать проверку на возвращения булеана?
    .toBe .toEqual .toBeInstanceOf просто отказываются работать :(
    Единственное что есть в интернете, это .toBeTruthy() и .toBeFalsy()
    напишите мне в slack
    */
  });

  it(`should return true for isograms`, () => {
    expect(isIsogram('abc')).toBe(true);
  });

  it(`should return false for not isograms`, () => {
    expect(isIsogram('aabc')).toBe(false);
  });

  it(`should return false if one of two same letters in Uppercase `, () => {
    expect(isIsogram('Aabc')).toBe(false);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for cyryllic isogram`, () => {
    expect(isIsogram('абвг')).toBe(true);
  });

  it(`should return false for cyryllic non-isogram`, () => {
    expect(isIsogram('Аабвг')).toBe(false);
  });
});
