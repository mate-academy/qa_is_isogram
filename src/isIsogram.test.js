'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`is declared`, () => {
    expect(isIsogram)
      .toBeInstanceOf(Function);
  });

  it(`returns boolean`, () => {
    expect(typeof isIsogram('test') === 'boolean')
      .toBeTruthy();
  });

  it(`returns true for empty string`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it(`returns true for isogram string in lowercase`, () => {
    expect(isIsogram('playgrounds'))
      .toBe(true);
  });

  it(`returns true for isogram string in mixed case`, () => {
    expect(isIsogram('PlayGrounds'))
      .toBe(true);
  });

  it(`returns false for non-isogram string in lowercase`, () => {
    expect(isIsogram('look'))
      .toBe(false);
  });

  it(`returns false for non-isogram string in mixed case`, () => {
    expect(isIsogram('LoOk'))
      .toBe(false);
  });
});
