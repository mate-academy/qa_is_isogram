'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('lower and upper case letters are the same',
    () => {
      expect(isIsogram('Cactus')).toBe(false);
    });

  it('look',
    () => {
      expect(isIsogram('look')).toBe(false);
    });

  it('Adam',
    () => {
      expect(isIsogram('Adam')).toBe(false);
    });

  it('',
    () => {
      expect(isIsogram('')).toBe(true);
    });

  it(' A',
    () => {
      expect(isIsogram(' A')).toBe(true);
    });

  it('   A',
    () => {
      expect(isIsogram('   A')).toBe(false);
    });

  it('Cyrillic letters are not the same as Latin',
    () => {
      expect(isIsogram('CatСвято')).toBe(true);
    });
});
