'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`true for unique letters`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`false for repeated letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`case sensitive`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should be a word', () => {
    expect(() => isIsogram('  abc,  def-gh-ijk!!??  '))
      .toThrow(new Error('Invalid word'));
  });
});
