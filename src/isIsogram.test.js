'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' for empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return 'false' for repeating letters`, () => {
    expect(isIsogram('good')).toBeFalsy();
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('Aaron')).toBeFalsy();
  });

  it(`should be 'true' for isogram`, () => {
    expect(isIsogram('love')).toBeTruthy();
  });
});
