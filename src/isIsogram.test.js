'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' if input is 'playgrounds'`, () => {
    expect(isIsogram('playgrounds')).toEqual(true);
  });

  it(`should return 'false' if input is 'look'`, () => {
    expect(isIsogram('look')).toEqual(false);
  });

  it(`should return 'false' if input is 'Adam'`, () => {
    expect(isIsogram('Adam')).toEqual(false);
  });

  it(`should return 'true' if input is ''`, () => {
    expect(isIsogram('')).toEqual(true);
  });

  it(`should return 'false' if input is 'Oops'`, () => {
    expect(isIsogram('Oops')).toEqual(false);
  });
});
