'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return boolean', () => {
    const result = isIsogram('abc');

    expect(typeof result === 'boolean').toBeTruthy();
  });

  it('should return true for empty string', () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it('should return false for non-consecutive duplicate', () => {
    expect(isIsogram('test')).toBeFalsy();
  });

  it('should return false for capitalized duplicate', () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it('should return false for consecutive duplicate', () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it('should return false for triplet and duplicate', () => {
    expect(isIsogram('bananas')).toBeFalsy();
  });

  it('should return true for \'isogram\'', () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });
});
