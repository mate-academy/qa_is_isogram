'use strict';

describe(`'isIsogram' function`, () => {
  const { isIsogram } = require('./isIsogram');

  // Data type cases:
  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`returns true for words with unique letters`, () => {
    const answer = isIsogram('qwerty');

    expect(answer)
      .toBeTruthy();
  });

  it(`returns true for latin alphabet`, () => {
    const answer = isIsogram('abcdefghijklmnoprstuyxz');

    expect(answer)
      .toBeTruthy();
  });

  it(`returns true for single letter`, () => {
    const answer = isIsogram('s');

    expect(answer)
      .toBeTruthy();
  });

  it(`returns true for ukrainian alphabet`, () => {
    const answer = isIsogram('абвгґдеєжзиіїйклмнопрстуфхцчшщьюя');

    expect(answer)
      .toBeTruthy();
  });


  it(`returns true for words with singe space`, () => {
    const answer = isIsogram('heso yam');

    expect(answer)
      .toBeTruthy();
  });

  it(`returns true for words with unique numbers`, () => {
    const answer = isIsogram('Tolya1234567890');

    expect(answer)
      .toBeTruthy();
  });

  it(`returns true for unique special characters`, () => {
    const answer = isIsogram(`Petya1!@#$%^&*\\'"()23`);

    expect(answer)
      .toBeTruthy();
  });

  it(`returns true for 'false'`, () => {
    const answer = isIsogram(`false`);

    expect(answer)
      .toBeTruthy();
  });

  // Negite test cases:
  it(`returns false if input has at least one pair of same characters`, () => {
    const answer = isIsogram(`aa`);

    expect(answer)
      .toBeFalsy();
  });

  it(`returns false if input has two charecters with differt case`, () => {
    const answer = isIsogram(`Aa`);

    expect(answer)
      .toBeFalsy();
  });
});
