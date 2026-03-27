'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be isogram`, () => {
    expect(isIsogram('playgrounds')).toEqual(true);
  });

  it(`should not be isogram`, () => {
    expect(isIsogram('look')).toEqual(false);
  });

  it(`should not be isogram`, () => {
    expect(isIsogram('Adam')).toEqual(false);
  });

  it(`should be isogram`, () => {
    expect(isIsogram('')).toEqual(true);
  });
});
