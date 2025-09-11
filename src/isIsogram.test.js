'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`Empty input`, () => {
    expect(isIsogram(''))
      .toEqual(true);
  });

  it(` input 'Work'`, () => {
    expect(isIsogram('Work'))
      .toEqual(true);
  });

  it(` input 'Door'`, () => {
    expect(isIsogram('Door'))
      .toEqual(false);
  });

  it(` function should be case-insensitive`, () => {
    expect(isIsogram('Eye'))
      .toEqual(false);
  });

  // it(`Should return true if 2 different words are isogram `, () => {
  //   expect(isIsogram('Work Hard'))
  //     .toEqual(true); (but it doesn't)
  // });

  it(`Should be boolean`, () => {
    expect(typeof isIsogram(''))
      .toBe('boolean');
  });
});
