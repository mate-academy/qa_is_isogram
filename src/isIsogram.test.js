'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('word "playgrounds" is an isogram', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('word "look" is not an isogram', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('word "Adam" is not an isogram (case insensitive)', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('word "isogram" is an isogram', () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  it('word "moOse" is not an isogram (case insensitive)', () => {
    expect(isIsogram('moOse')).toBe(false);
  });

  it('word "thumbscrew-japingly" is an isogram', () => {
    expect(isIsogram('thumbscrew-japingly')).toBe(true);
  });

  test('word "background" is an isogram', () => {
    expect(isIsogram('background')).toBe(true);
  });
});
