'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`accepts unique letters`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`rejects repeated consecutive letters`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`rejects duplicate letters regardless of case`, () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it(`accepts empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });
});
