'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return boolean', () => {
    expect(typeof isIsogram('a')).toBe('boolean');
  });

  it('should return true if entered string is empty', () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it('should return true if entered string has 1 letter', () => {
    expect(isIsogram('a')).toBeTruthy();
  });

  it('should return true if entered string has no repeatings', () => {
    expect(isIsogram('PLAyGROUnDS')).toBeTruthy();
  });

  it('should return false if entered string'
  + ' is lowercase and has repeatings', () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it('should return false if entered string'
  + ' has lower and uppercase and has repeatings', () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it('should return true if entered string'
  + ' has letter from different languages', () => {
    expect(isIsogram('ФАСFAC')).toBeTruthy();
  });
});
