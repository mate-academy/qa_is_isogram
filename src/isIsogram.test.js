'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' if the string is empty`, () => {
    const result = isIsogram('');

    expect(result).toBeTruthy();
  });

  it(`should return 'true' if the string is isogram`, () => {
    const result = isIsogram('playgrounds');

    expect(result).toBeTruthy();
  });

  it(`should be case-insensitive`, () => {
    const result = isIsogram('Adam');

    expect(result).toBeFalsy();
  });

  it(`should return 'false' if the string is not isogram`, () => {
    const result = isIsogram('hook');

    expect(result).toBeFalsy();
  });
});
