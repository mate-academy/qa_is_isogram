'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' if empty`, () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it(`should return 'true' if 'playgrounds'`, () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it(`should return 'false' if 'look'`, () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it(`should return 'false' if 'Adam'`, () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });

  it(`should return 'false' if 'Oops'`, () => {
    const result = isIsogram('Oops');

    expect(result).toBe(false);
  });
});
