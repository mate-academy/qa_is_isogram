'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' if 'word' is equal to the empty string`, () => {
    const result = isIsogram('');

    expect(result).toBeTruthy();
  });

  it(`should return 'true' if 'word' is equal to 'playgrounds'`, () => {
    const result = isIsogram('playgrounds');

    expect(result).toBeTruthy();
  });

  it(`should return 'false' if 'word' is equal to 'look'`, () => {
    const result = isIsogram('look');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' if 'word' is equal to 'Adam'`, () => {
    const result = isIsogram('Adam');

    expect(result).toBeFalsy();
  });
});
