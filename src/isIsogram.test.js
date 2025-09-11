'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`be true for ''`, () => {
    const word = '';

    expect(isIsogram(word))
      .toBe(true);
  });

  it(`be true for one symbol`, () => {
    const word = 'a';

    expect(isIsogram(word))
      .toBe(true);
  });

  it(`be false for m&m`, () => {
    const word = 'mM';

    expect(isIsogram(word))
      .toBe(false);
  });

  it(`be false for m&M`, () => {
    const word = 'mM';

    expect(isIsogram(word))
      .toBe(false);
  });
});
