'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`isIsogram should be a function`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test(`should return the true if input is ABCD`, () => {
    expect(isIsogram('ABCD'))
      .toEqual(true);
  })

  test(`should return the true if input is abcd`, () => {
    expect(isIsogram('abcd'))
      .toEqual(true);
  })

  test(`should return the true if input is AbCd`, () => {
    expect(isIsogram('AbCd'))
      .toEqual(true);
  })

  test(`should return the false if input is Aabcd`, () => {
    expect(isIsogram('Aabcd'))
      .toEqual(false);
  })

  test(`should return the false if input is AAbcd`, () => {
    expect(isIsogram('AAbcd'))
      .toEqual(false);
  })

  test(`should return the true if input is абвг`, () => {
    expect(isIsogram('абвг'))
      .toEqual(true);
  })

  test(`should return the false if input is Аабвг`, () => {
    expect(isIsogram('Аабвг'))
      .toEqual(false);
  })

  test(`should return the true if input is aабвг (first a - eng, second a - ukr)`, () => {
    expect(isIsogram('aабвг'))
      .toEqual(true);
  })
});
