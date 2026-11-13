'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('first passed test', () => {
    expect(isIsogram('playgrounds')).toEqual(true);
  });

  it('first failed test', () => {
    expect(isIsogram('look')).toEqual(false);
  });

  it('second failed test', () => {
    expect(isIsogram('Adam')).toEqual(false);
  });

  it('empty string', () => {
    expect(isIsogram('')).toEqual(true);
  });

  it('third failed test', () => {
    expect(isIsogram('Oops')).toEqual(false);
  });
});
