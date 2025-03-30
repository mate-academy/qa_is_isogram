'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' for empty string`, () => {
    expect(isIsogram('')).toEqual(true);
  });

  it(`should return 'true' for isogram string`, () => {
    expect(isIsogram('playgrounds')).toEqual(true);
  });

  it(`should return 'false' for not isogram string`, () => {
    expect(isIsogram('look')).toEqual(false);
  });

  it(`should be case-insensitive (A === a)`, () => {
    expect(isIsogram('Adam')).toEqual(false);
    expect(isIsogram('MaTheR')).toEqual(true);
  });

  it(`should work with special signs and spaces`, () => {
    expect(isIsogram('-_=+;:.,/?!~|\\ @#$%^&*(){}[]"`')).toEqual(true);
    expect(isIsogram('we do it!')).toEqual(false);
    expect(isIsogram('"string"')).toEqual(false);
    expect(isIsogram('get().trim()')).toEqual(false);
  });
});
