'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be retourn 'true' if word is isogram`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should be retourn 'false' if word include duplicate letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should be retourn 'false' if
    word include duplicate capital letters`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should be retourn 'true' if an empty string is passed`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });
});
