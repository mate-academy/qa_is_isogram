'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('playgrounds', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test('look', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test('Adam', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  test('', () => {
    expect(isIsogram('',)).toBe(true);
  });
});
