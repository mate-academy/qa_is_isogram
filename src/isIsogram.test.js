'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'false' if 'word' consists of repetitive letters`, () => {
    const result = isIsogram('hello');

    expect(result).toBeFalsy();
  });

  it(`should be case-insensitive`, () => {
    const result = isIsogram('heLlo');

    expect(result).toBeFalsy();
  });

  it(`should return 'true' for an empty string`, () => {
    const result = isIsogram('');

    expect(result).toBeTruthy();
  });

  it(`should return 'true' if 'word' don't have repetitive letters`, () => {
    const result = isIsogram('something');

    expect(result).toBeTruthy();
  });
});
