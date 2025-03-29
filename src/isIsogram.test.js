'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return boolean value', () => {
    const result = isIsogram('yes');

    expect(typeof result).toBe('boolean');
  });

  it('should return true for an empty string', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('should return true if there are no repeated letters', () => {
    const result = isIsogram('friends');

    expect(result).toBe(true);
  });

  it('should return false if the consecutive letters repeat', () => {
    const result = isIsogram('sunny');

    expect(result).toBe(false);
  });

  it('should return false if the non-consecutive letters repeat', () => {
    const result = isIsogram('without');

    expect(result).toBe(false);
  });

  it('should be case-insensitive', () => {
    const result = isIsogram('Wow');

    expect(result).toBe(false);
  });
});
