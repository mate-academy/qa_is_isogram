'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' when input equal to ''`, () => {
    const result = isIsogram('');

    expect(result)
      .toBe(true);
  });

  it(`should return 'false' when input one letter in two cases`, () => {
    const result = isIsogram('Aram');

    expect(result)
      .toBe(false);
  });

  it(`should return 'false' when input have space`, () => {
    const result = isIsogram('Arm ');

    expect(result)
      .toBe(false);
  });

  it(`should return 'true' if word is correct`, () => {
    const result = isIsogram('Arm');

    expect(result)
      .toBe(true);
  });
});
