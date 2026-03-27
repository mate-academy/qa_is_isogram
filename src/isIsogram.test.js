'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return "true" when receives "playground"', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it('should return "false" when receives "look"', () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it('should return "false" when receives "Adam"', () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });

  it('should return "true" when receives ""', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });
});
