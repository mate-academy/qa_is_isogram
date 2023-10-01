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

  it('should return true when input is "mother"', () => {
    expect(isIsogram('mother'))
      .toBeTruthy();
  });

  it('should return true when input is "Father"', () => {
    expect(isIsogram('Father'))
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
