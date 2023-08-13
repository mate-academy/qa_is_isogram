'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('should return true if an isogram (playgrounds)', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test('should return false if not an isagram (look)', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test('should return false if not an isagram (Adam)', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  test('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });
});
