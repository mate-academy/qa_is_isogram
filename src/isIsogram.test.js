'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should throw an error if 'word' includes not only letters`, () => {
    expect(() => isIsogram('ght5re')).toThrow();
  });

  it(`should return 'true' if 'word' is empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return 'true' if 'word' = playgrounds`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`should return 'false' if 'word' = look`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`should return 'false' if 'word' = Adam`, () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it(`should return 'false' if 'word' = Oops`, () => {
    expect(isIsogram('Oops')).toBeFalsy();
  });
});
