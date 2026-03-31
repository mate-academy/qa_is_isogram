'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true when word is 'playgrounds'`, () => {
    expect(isIsogram('playgrounds')).toEqual(true);
  });

  it(`should return false when word is 'look'`, () => {
    expect(isIsogram('look')).toEqual(false);
  });

  it(`should return false when word is 'Adam'`, () => {
    expect(isIsogram('Adam')).toEqual(false);
  });

  it(`should return true when word is empty string`, () => {
    expect(isIsogram('')).toEqual(true);
  });

  it(`should return false when word is 'Oops'`, () => {
    expect(isIsogram('Oops')).toEqual(false);
  });
});
