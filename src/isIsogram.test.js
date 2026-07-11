'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return boolean result', () => {
    expect(typeof isIsogram('world')).toBe('boolean');
  });

  it(`return "true" for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`"playgrounds" is an isogram === "true"`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`"look" is not an isogram === "false"`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`"Adam" is not an isogram === "false"`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`"Oops" is not an isogram === "false"`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it(`should be case-insensitive: "Aa" is not an isogram === "false"`, () => {
    expect(isIsogram('Aa')).toBe(false);
  });
});
