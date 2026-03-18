'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`if isogram should be true`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`returns false when letters repeat`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`handles consecutive duplicate letters`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it(`should be case-insensitive`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`if empty should be true`, () => {
    expect(isIsogram('')).toBe(true);
  });
});
