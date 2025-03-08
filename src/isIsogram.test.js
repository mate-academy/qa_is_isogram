'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('"playgrounds" === true', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('"look" === false', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('"Adam" === false', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('"" === true', () => {
    expect(isIsogram('')).toBe(true);
  });
});
