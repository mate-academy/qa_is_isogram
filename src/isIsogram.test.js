'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('no repeating letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('with repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('case-insensitive', () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
