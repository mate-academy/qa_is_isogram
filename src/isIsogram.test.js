'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an empty string`, () => {
    const res = isIsogram('');

    expect(res).toBe(true);
  });

  it(`should return true if word has no repeating letters`, () => {
    const res = isIsogram('playgrounds');

    expect(res).toBe(true);
  });

  it(`should return false if word has repeating letters`, () => {
    const res = isIsogram('look');

    expect(res).toBe(false);
  });

  it(`should NOT be case sensitive`, () => {
    const res = isIsogram('AbRakADabra');

    expect(res).toBe(false);
  });
});
