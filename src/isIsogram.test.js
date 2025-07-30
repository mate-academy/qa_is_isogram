'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should include letters', () => {
    expect(isIsogram('m')).toEqual(true);
  });

  it('should include empty string ', () => {
    expect(isIsogram('')).toEqual(true);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('Adam')).toEqual(false);
  });

  it('should not repeat letters', () => {
    expect(isIsogram('Adaam')).toEqual(false);
  });
});
