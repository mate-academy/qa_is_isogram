'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should be defined with an empty string in params', () => {
    expect(isIsogram('')).toBeDefined();
  });

  it('should return true with an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for 'playgrounds'`, () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it(`should return false for 'look'`, () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it(`should return false for 'Adam'`, () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });

  it('should return true with all unique upper letters', () => {
    const result = isIsogram('JEST');

    expect(result).toBe(true);
  });

  it('should return true with unique numbers', () => {
    const result = isIsogram('1234');

    expect(result).toBe(true);
  });

  it('should return false with duplicated numbers', () => {
    const result = isIsogram('112344');

    expect(result).toBe(false);
  });

  it('should return false with more than 1 spaces', () => {
    const result = isIsogram('je s t');

    expect(result).toBe(false);
  });
});
