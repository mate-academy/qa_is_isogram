'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a 'boolean'`, () => {
    expect(typeof isIsogram(''))
      .toBe('boolean');
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('MATE'))
      .toBe(true);
  });

  it(`should rate an empty string '' as isogram`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it(`should return 'true' if word has no repeating letters`, () => {
    expect(isIsogram('IndeX'))
      .toBe(true);
  });

  it(`should return 'false' if word has consecutive repeating letters`, () => {
    expect(isIsogram('Maate'))
      .toBe(false);
  });

  it(`should return 'false' if word has repeating letters at all`, () => {
    expect(isIsogram('matea'))
      .toBe(false);
  });
});
