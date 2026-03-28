'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should be true if inpit is empty', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should be true for one letter', () => {
    expect(isIsogram('A')).toBe(true);
  });

  it('return "false" if input="Mommy"', () => {
    expect(isIsogram('Mommy')).toBe(false);
  });

  it('return "true" if different case', () => {
    expect(isIsogram('aBcDeFg')).toBe(true);
  });

  it('return "true" if input="dermatoglyphics"', () => {
    expect(isIsogram('dermatoglyphics')).toBe(true);
  });

  it('return "false" if input="dermatoglyphics log"', () => {
    expect(isIsogram('dermatoglyphics log')).toBe(false);
  });
});
