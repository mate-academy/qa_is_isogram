'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true when input is empty string', () => {
    expect(isIsogram(''))
      .toBeTruthy();
  });

  it('should return true when input is an isogram with lowercase letters',
    () => {
      expect(isIsogram('mother'))
        .toBeTruthy();
    });

  it('should return true when input is isogram with uppercase lowercase letters'
    , () => {
      expect(isIsogram('Father'))
        .toBeTruthy();
    });

  it('should return true when input is lowercase isogram + number'
    , () => {
      expect(isIsogram('card1'))
        .toBeTruthy();
    });

  it('should return true when input is Uppercase isogram + number'
    , () => {
      expect(isIsogram('1Home'))
        .toBeTruthy();
    });

  it('should return true when input is lowercase isogram + special ch'
    , () => {
      expect(isIsogram('$witch'))
        .toBeTruthy();
    });

  it('should return false when input is "Hello"', () => {
    expect(isIsogram('Hello'))
      .toBeFalsy();
  });

  it('should return false when input is "Anya"', () => {
    expect(isIsogram('Anya'))
      .toBeFalsy();
  });
});
