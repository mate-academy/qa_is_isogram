'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should throw an error on invalid arguments type`, () => {
    expect(() => {
      isIsogram(123);
    })
      .toThrow();
  });

  it(`should return 'true' for empty string`, () => {
    const result = isIsogram('');

    expect(result)
      .toBe(true);
  });

  it(`should return 'true' for isogram`, () => {
    const result = isIsogram('123');

    expect(result)
      .toBe(true);
  });

  it(`should return 'false' for not isogram`, () => {
    const result = isIsogram('12333');

    expect(result)
      .toBe(false);
  });

  it(`should return correct value regardles of case`, () => {
    const result = isIsogram('Aa');

    expect(result)
      .toBe(false);
  });
});
