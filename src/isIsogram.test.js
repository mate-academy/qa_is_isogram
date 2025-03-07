'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('Should retern "true" if argument is "playgrounds"', () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it('Should retern "false" if argument is "look"', () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it('Should retern "false" if argument is "Adam"', () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it('Should retern "true" if argument is empty string', () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it('Should retern "false" if argument is "Oops"', () => {
    expect(isIsogram('Oops')).toBeFalsy();
  });
});
