'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return boolean', () => {
    const result = isIsogram('');

    expect(typeof result).toBe('boolean');
  });

  it(`empty string return 'true'`, () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it(`'word' with same letters return 'false'`, () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it(`'word' without same letters return 'true'`, () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it(`'word' with different registers same letters return 'false'`, () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });
});
