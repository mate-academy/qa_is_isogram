'use strict';

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

  it(`returns 'false' when 'word' === 'Adam'`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`returns 'false' when 'word' === 'look'`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`returns 'false' when 'word' === 'aab'`, () => {
    expect(isIsogram('aab')).toBe(false);
  });

  it(`returns 'false' when 'word' === 'éclair'`, () => {
    expect(isIsogram('éclair')).toBe(false);
  });

  it(`returns 'true' when 'word' === 'unique'`, () => {
    expect(isIsogram('unique')).toBe(true);
  });

  it(`returns 'true' for a single character 'a'`, () => {
    expect(isIsogram('a')).toBe(true);
  });

  it(`returns 'true' for a string with symbols 'hello@world!'`, () => {
    expect(isIsogram('hello@world!')).toBe(true);
  });
});

