'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => expect(isIsogram).toBeDefined());

  it(`returns 'true' for word without repeating letters`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`returns 'false' for word with repeating letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(
    `returns 'false' for word with repeating upper and lower case letters`,
    () => expect(isIsogram('Adam')).toBe(false),
  );

  it(`returns 'true' for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(
    `returns 'false' for word with repeating letters standing together`,
    () => expect(isIsogram('Oops')).toBe(false),
  );
});
