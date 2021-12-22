'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  test(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('Should return true with empty string', () => {
    expect(isIsogram(''))
      .toEqual(true);
  });

  it(`Should return true with string = 'Vlad'`, () => {
    expect(isIsogram('Vlad'))
      .toEqual(true);
  });

  it('Should return false if string = "Vladislav"', () => {
    expect(isIsogram('Vladislav'))
      .toEqual(false);
  });

  it('Should return false if string = "aAnNbB"', () => {
    expect(isIsogram('aAnNbB'))
      .toEqual(false);
  });

  it('Should return true if string has all letters', () => {
    expect(isIsogram('qwertyuiopasdfghjklzxcvbnm'))
      .toEqual(true);
  });
});
