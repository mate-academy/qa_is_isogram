'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should returns true for a real isogram', () => {
    const res = isIsogram('playgrounds');

    expect(res).toBe(true);
  });

  it('should returns false for a non-isogram', () => {
    const res = isIsogram('look');

    expect(res).toBe(false);
  });

  it('should returns false when same letter appears'
    + ' in different cases consecutive', () => {
    const res = isIsogram('Adam');

    expect(res).toBe(false);
  });

  it('should returns true for empty string', () => {
    const res = isIsogram('');

    expect(res).toBe(true);
  });

  it('should returns false when same letter appears'
    + ' in different cases non-consecutive', () => {
    const res = isIsogram('Oops');

    expect(res).toBe(false);
  });
});
