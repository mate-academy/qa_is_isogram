'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('should return true for an empty string', () => {
    expect(isIsogram(''))
      .toBeTruthy();
  });

  it('should return true when the word is isogram', () => {
    expect(isIsogram('playgrounds'))
      .toBeTruthy();
  });

  it('should return false for a non-isogram word', () => {
    expect(isIsogram('look'))
      .toBeFalsy();
  });

  it('should return false for a non-isogram word (case-insensitive)', () => {
    expect(isIsogram('Adam'))
      .toBeFalsy();
  });
});
