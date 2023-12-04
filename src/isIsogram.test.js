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

  it('different languages CС', () => {
    expect(isIsogram('CС')).toBeTruthy();
  });

  it('One letter', () => {
    expect(isIsogram('K')).toBeTruthy();
  });

  it('Special symbols', () => {
    expect(isIsogram('@_-')).toBeTruthy();
  });

  it('Numbers', () => {
    expect(isIsogram('12345')).toBeTruthy();
  });

  it('Same numbers', () => {
    expect(isIsogram('55')).toBeFalsy();
  });

  it('Same symbols', () => {
    expect(isIsogram('@@')).toBeFalsy();
  });
});
