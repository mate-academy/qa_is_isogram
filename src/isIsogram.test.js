'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(isIsogram('hoome'))
      .toBeFalsy();
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('Hoh'))
      .toBeFalsy();
  });

  it(`should be true when input is 'playgrounds'`, () => {
    expect(isIsogram('playgrounds'))
      .toEqual(true);
  });

  it(`should be true when input is ''`, () => {
    expect(isIsogram(''))
      .toEqual(true);
  });

  it(`should be false when input is 'look'`, () => {
    expect(isIsogram('look'))
      .toEqual(false);
  });
});
