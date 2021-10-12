'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram)
      .toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('isogram'))
      .toBe('boolean');
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('Anna'))
      .toBe(false);
  });

  // write more tests here
  it(`should return 'true' if input is ''`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it(`should return 'true' if input is 'k'`, () => {
    expect(isIsogram('k'))
      .toBe(true);
  });

  it(`should return 'false' if input is 'oO'`, () => {
    expect(isIsogram('oO'))
      .toBe(false);
  });

  it(`should return 'true' if input is 'isogram'`, () => {
    expect(isIsogram('isogram'))
      .toBe(true);
  });

  it(`should return 'false' if input is 'notisogram'`, () => {
    expect(isIsogram('notisogram'))
      .toBe(false);
  });

  it(`should return 'true' if input is 'uncopyrightable'`, () => {
    expect(isIsogram('uncopyrightable'))
      .toBe(true);
  });

  it(`should return 'false' if input is 'uncopyrightEble'`, () => {
    expect(isIsogram('uncopyrightEble'))
      .toBe(false);
  });
});
