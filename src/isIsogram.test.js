'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('empty string', () => {
    const str = isIsogram('');

    expect(str).toBe(true);
  });

  it('no repeating letter', () => {
    const str = isIsogram('jest');

    expect(str).toBe(true);
  });

  it('repeating letter', () => {
    const str = isIsogram('look');

    expect(str).toBe(false);
  });

  it('repeating letter in upper and lower case', () => {
    const str = isIsogram('Adam');

    expect(str).toBe(false);
  });
});
