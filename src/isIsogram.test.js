'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`returns 'true' for 'playgrounds'`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`returns 'true' for ''`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`returns 'false' for 'look'`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`returns 'false' for 'Oops'`, () => {
    expect(isIsogram('Oops')).toBeFalsy();
  });
});
