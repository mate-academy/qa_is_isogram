'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return boolean', () => {
    expect(typeof isIsogram('')).toBe('boolean');
  });

  it('should\'nt be case sensitive', () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it('should\'nt ignore spacebars', () => {
    expect(isIsogram(' play ')).toBeFalsy();
  });

  it(`no repeated letters lead to 'true'`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`repeated letters lead to 'false'`, () => {
    expect(isIsogram('apple')).toBeFalsy();
  });
});
