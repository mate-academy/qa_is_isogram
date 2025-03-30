'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return boolean', () => {
    expect(typeof isIsogram(''))
      .toBe('boolean');
  });

  describe('Cyrillic letters', () => {
    it('should work with UpperCase letters', () => {
      expect(isIsogram('АБВГ'))
        .toEqual(true);
      expect(isIsogram('АБВА'))
        .toEqual(false);
    });
    it('should work with LowerCase letters', () => {
      expect(isIsogram('абвг'))
        .toEqual(true);
      expect(isIsogram('абва'))
        .toEqual(false);
    });
    it('should work with CamelCase letters', () => {
      expect(isIsogram('АбВг'))
        .toEqual(true);
      expect(isIsogram('АбВа'))
        .toEqual(false);
    });
  });

  describe('Latin letters', () => {
    it('should work with UpperCase letters', () => {
      expect(isIsogram('ABCD'))
        .toEqual(true);
      expect(isIsogram('ABCA'))
        .toEqual(false);
    });
    it('should work with LowerCase letters', () => {
      expect(isIsogram('abcd'))
        .toEqual(true);
      expect(isIsogram('abca'))
        .toEqual(false);
    });
    it('should work with CamelCase letters', () => {
      expect(isIsogram('AbCd'))
        .toEqual(true);
      expect(isIsogram('AbCa'))
        .toEqual(false);
    });
  });

  describe('different alphabets', () => {
    it('should return true for latin A and cyrillic A', () => {
      expect(isIsogram('AА'))
        .toEqual(true);
    });
    it('should return true for latin a and cyrillic a', () => {
      expect(isIsogram('aа'))
        .toEqual(true);
    });
    it('should return true for latin A and cyrillic a', () => {
      expect(isIsogram('Aа'))
        .toEqual(true);
    });
    it('should return true for latin a and cyrillic A', () => {
      expect(isIsogram('aА'))
        .toEqual(true);
    });
  });
});
