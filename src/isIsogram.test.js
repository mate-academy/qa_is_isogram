'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('Should accept empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('Should accept string with space', () => {
    expect(isIsogram(' ')).toBe(true);
  });

  it('Should not accept string with spaces', () => {
    expect(isIsogram('   ')).toBe(false);
  });

  it('Should not accept string with doubled letters', () => {
    expect(isIsogram('banana')).toBe(false);
  });

  it('Should be case sensetive', () => {
    expect(isIsogram('BaNAna')).toBe(false);
  });

  it('Should accept string with valid data', () => {
    expect(isIsogram('Ben')).toBe(true);
  });
});
