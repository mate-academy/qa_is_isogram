'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true if comes an empty string', () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it('should return correct value if a non-empty string is received', () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
    expect(isIsogram('look')).toBeFalsy();
  });
  
  it('should return a valid string regardless of case', () => {
    expect(isIsogram('LooK')).toBeFalsy();
    expect(isIsogram('PlayGrouNDS')).toBeTruthy();
  });
});
