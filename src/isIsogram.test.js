'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test(`should return true when the input value is 'Danil' `, () => {
    expect(isIsogram('Danil')).toBe(true);
  });

  test(`should return false when the input value is 'Daniil' `, () => {
    expect(isIsogram('Daniil')).toBe(false);
  });

  test(`should return false when the input value is 'Kateryna' `, () => {
    expect(isIsogram('Kateryna')).toBe(false);
  });

  test(`should return true when the input value is 'Kate' `, () => {
    expect(isIsogram('Kate')).toBe(true);
  });

  test(`should return true when the input value is '' `, () => {
    expect(isIsogram('')).toBe(true);
  });
});
