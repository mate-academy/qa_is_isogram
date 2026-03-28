'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`'true' when we have different letters`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`'true' when we have empty sting`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`'false' when we have similar letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`'false' when we have similar letters with different case`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`'false' when we have similar close letters with different case`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
