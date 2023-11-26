'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('playgrounds', () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(' ', () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it('look', () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it('Adam', () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });
});
