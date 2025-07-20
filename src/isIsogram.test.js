'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('should return false for a string with numbers', () => {
    const results = [
      isIsogram('42world'),
      isIsogram('wor42ld'),
      isIsogram('world42'),
    ];

    expect(results).toEqual([false, false, false]);
  });

  it('should check if a string contains not unique letters', () => {
    const results = [
      isIsogram('mom'),
      isIsogram('rocket'),
      isIsogram('abrakadabra'),
      isIsogram('putin chmo'),
      isIsogram('Ukraine'),
    ];

    expect(results).toEqual([false, true, false, true, true]);
  });

  it('should ignore case-sensivity', () => {
    const result = isIsogram('Heh?');

    expect(result).toBe(false);
  });
});
