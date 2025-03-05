'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true with an empty string', () => {
    const result = isIsogram('');

    expect(result).toBeTruthy();
  });

  it('should return true with a single letter', () => {
    const result = isIsogram('c');

    expect(result).toBeTruthy();
  });

  it('should return true for an isogram word', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBeTruthy();
  });

  it('should return false for a word with repeating in different cases', () => {
    const result = isIsogram('Adam');

    expect(result).toBeFalsy();
  });
});
