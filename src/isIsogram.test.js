'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`returns 'true' for empty string`, () => {
    expect(isIsogram()).toBe(true);
  });

  it(`returns 'true' when 'word' === 'playgrounds'`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`returns 'false' when 'word' === 'Adem'`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`returns 'false' when 'word' === 'look'`, () => {
    expect(isIsogram('look')).toBe(false);
  });
});
