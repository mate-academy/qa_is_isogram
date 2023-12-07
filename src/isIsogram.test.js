'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('should return false for a non-isogram', () => {
    const result = isIsogram('barcelona');

    expect(result).toBe(false);
  });

  it('should return true for an isogram', () => {
    const result = isIsogram('iphone');

    expect(result).toBe(true);
  });

  it('should return false for a non-isogram with different case', () => {
    const result = isIsogram('Snickers');

    expect(result).toBe(false);
  });
});
