'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should cheks text with diferent letters`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`should cheks text with same letters`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`should cheks text with same letters of different cases`, () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it(`should cheks empty as isogram`, () => {
    expect(isIsogram('')).toBeTruthy();
  });
});
