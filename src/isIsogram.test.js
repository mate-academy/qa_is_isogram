'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should accept empty string as isogram', () => {
    expect(isIsogram(''))
      .toBeTruthy();
  });

  it('should be case insensetive', () => {
    expect(isIsogram('Mama'))
      .toBeFalsy();
  });

  it('should accept the same letters as false', () => {
    expect(isIsogram('look'))
      .toBeFalsy();
  });

  it('should accept word with no repeat letters as isogram', () => {
    expect(isIsogram('isogram'))
      .toBeTruthy();
  });
});
