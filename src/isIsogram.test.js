'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`returns 'true' on 'epty string' input`, () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it(`is case-insensitive`
  + `, returns 'true' on 'Iryna' input`, () => {
    const result = isIsogram('Iryna');

    expect(result).toBe(true);
  });

  it(`returns 'false' on 'Door' input`, () => {
    const result = isIsogram('Door');

    expect(result).toBe(false);
  });

  it(`returns 'true' on 'playgrounds' input`, () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });
});
