'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('should return true if an isogram (playgrounds)', () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  test('should return false if not an isagram (look)', () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  test('should return false if not an isagram (Adam)', () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  test('should return true for an empty string', () => {
    expect(isIsogram('')).toBeTruthy();
  });
});
