'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`An empty string should be an isogram`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`An empty string should be an isogram`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`Word with non-repeating letters should be an isogram`, () => {
    expect(isIsogram('chupik')).toBeTruthy();
  });

  it(`Word with non-repeating letters in different case should be an isogram`,
    () => {
      expect(isIsogram('ImaGeS')).toBeTruthy();
    });

  it(`2 words with non-repeating letters should be an isogram`, () => {
    expect(isIsogram('wery bad')).toBeTruthy();
  });

  it(`2 words with non-repeating letters in different case should
    be an isogram`, () => {
    expect(isIsogram('Lucky')).toBeTruthy();
  });

  it(`Word with non-repeating non-Latin letters should be an isogram`, () => {
    expect(isIsogram('Сало')).toBeTruthy();
  });
});

describe('is NOT Isogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`Word with repeating letters should be NOT an isogram`, () => {
    expect(isIsogram('akademik')).toBeFalsy();
  });

  it(`Word with repeating letters in different case should be NOT an isogram`,
    () => {
      expect(isIsogram('ChaRactErs')).toBeFalsy();
    });

  it(`Sentence more than 2 words with spaces should be NOT an isogram`, () => {
    expect(isIsogram('Today is licky Day')).toBeFalsy();
  });
});
