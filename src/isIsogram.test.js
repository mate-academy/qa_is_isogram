'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should be isIsogram `playgrounds` expect return true', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should be isIsogram `look` expect return false', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should be isIsogram `Adam` expect return false', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should be isIsogram empty line  `` expect return true', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should be isIsogram `Oops` expect return true', () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
