'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('Should return "true" if argument is "playgrounds"', () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it('Should return "false" if argument is "look"', () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it('Should return "false" if argument is "Adam"', () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it('Should return "true" if argument is empty string', () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it('Should return "false" if argument is "Oops"', () => {
    expect(isIsogram('Oops')).toBeFalsy();
  });
});
