'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`Should return 'true' with 'playgrounds' imput`, () => {
    expect(isIsogram('playgrounds')).toEqual(true);
  });

  it(`Should return 'false' with 'hii' imput`, () => {
    expect(isIsogram('hii')).toEqual(false);
  });

  it(`Should return 'false' with 'Aa' imput`, () => {
    expect(isIsogram('Aa')).toEqual(false);
  });

  it(`Should return 'true' with '' imput`, () => {
    expect(isIsogram('hii')).toEqual(false);
  });
});
