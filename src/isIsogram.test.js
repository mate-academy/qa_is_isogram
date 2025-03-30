'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' for correct isogram`, () => {
    expect(isIsogram('playgrounds'))
      .toBeTruthy();
  });

  it(`should return "false" for identical letters`, () => {
    expect(isIsogram('look'))
      .toBeFalsy();
  });

  it(`should return 'false' for case sensitive identical letters`, () => {
    expect(isIsogram('Adam'))
      .toBeFalsy();
  })

  it(`should return 'true' for empty string`, () => {
    expect(isIsogram(''))
      .toBeTruthy();
  })
});
