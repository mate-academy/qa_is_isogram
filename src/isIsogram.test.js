'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' if word is ""isogram""`, () => {
    const result = isIsogram('work');

    expect(result).toBeTruthy();
  });

  it(`should return 'false' if word is not ""isogram""`, () => {
    const result = isIsogram('sunset');

    expect(result).toBeFalsy();
  });

  it('should non depend from cases', () => {
    const result = isIsogram('immediatE');

    expect(result).toBeFalsy();
  });

  it('should work with empty string', () => {
    const result = isIsogram('');

    expect(result).toBeTruthy();
  });
});
