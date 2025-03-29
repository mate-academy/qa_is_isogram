'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('no repeating letter', () => {
    expect(isIsogram('look')).toEqual(false);
  });

  it('no repeating letter', () => {
    expect(isIsogram('Peter')).toEqual(false);
  });

  it('no repeating letter', () => {
    expect(isIsogram('Adam')).toEqual(false);
  });

  it('no repeating letter', () => {
    expect(isIsogram('playgrounds')).toEqual(true);
  });

  it('no repeating letter', () => {
    expect(isIsogram('')).toEqual(true);
  });
});
