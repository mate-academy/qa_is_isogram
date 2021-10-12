'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    const result = isIsogram('');

    expect(typeof result).toBe('boolean');
    //   expect(`${result}`).toMatch(/[null|true|false]/);
  });

  it(`should be be case sensitive`, () => {
    expect(isIsogram('Mom')).toEqual(false);
  });
  // write more tests here

  it(`should be true for empty string`, () => {
    const result = isIsogram('');

    expect(result).toEqual(true);
  });

  it(`"MotlyCrew" should be isogram`, () => {
    expect(isIsogram('MotlyCrew')).toEqual(true);
  });
});
