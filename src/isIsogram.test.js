'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`return 'true' for 'playgrounds'`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`return 'false' for 'look'`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`return 'false' for 'Adam'`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`return 'true' for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`return 'false' for 'Oops'`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
