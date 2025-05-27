'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return false on the same letter with different cases`, () => {
    expect(isIsogram(`Mmonster`)).toEqual(false);
  });

  it(`should return true on the empty string`, () => {
    expect(isIsogram(``)).toEqual(true);
  });

  it(`should return true on the space`, () => {
    expect(isIsogram(` `)).toEqual(true);
  });

  it(`should return true on word with the unique letters`, () => {
    expect(isIsogram(`dog`)).toEqual(true);
  });

  it(`should return false on the word with duplicating letters`, () => {
    expect(isIsogram(`book`)).toEqual(false);
  });
});
