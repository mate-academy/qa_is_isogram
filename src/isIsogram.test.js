'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('playgrounds')).toBe('boolean');
  });

  it(`should be case sensitive`, () => {
    const result = isIsogram('wOod');

    expect(result).toBe(false);
  });

  it(`should be return true if word is empty`, () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it(`should be return true if word is empty`, () => {
    const result = isIsogram('forest');

    expect(result).toBe(true);
  });
});
