'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should be truthy for empty string', () => {
    const result = isIsogram('');

    expect(result).toBeTruthy();
  });

  it('should be truthy for words only with unique chars', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBeTruthy();
  });

  it('should be falsy for words with repeated chars', () => {
    const result = isIsogram('look');

    expect(result).toBeFalsy();
  });

  it('should be case-insensitive', () => {
    const result = isIsogram('Adam');

    expect(result).toBeFalsy();
  });

  it('should be falsy for two letters repeats at the start', () => {
    const result = isIsogram('Oops');

    expect(result).toBeFalsy();
  });
});
