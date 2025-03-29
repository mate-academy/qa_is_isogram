'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true when value is (\'mean\')', () => {
    expect(isIsogram('mean')).toBeTruthy();
  });

  it('should return true when value is (\'woman\')', () => {
    expect(isIsogram('woman')).toBeTruthy();
  });

  it('should return true when value is (\'advice\')', () => {
    expect(isIsogram('advice')).toBeTruthy();
  });

  it('should return false when value is (\'cocumber\')', () => {
    expect(isIsogram('cocumber')).toBeFalsy();
  });

  it('should return false when value is (\'effect\')', () => {
    expect(isIsogram('effect')).toBeFalsy();
  });
});
