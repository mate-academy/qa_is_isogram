'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return a string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should contain only letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should check that there are no repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return true if there is empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should be case-insensetive', () => {
    expect(isIsogram('PlayGrounds')).toBe(true);
  });

  it('should be consecutive or non-consecutive', () => {
    expect(isIsogram('paly')).toBe(true);
  });
});
