'use strict';

describe(`'isIsogram' function - result === true (Isogram)`, () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`simple word 'ask' toLowerCase`, () => {
    expect(isIsogram('ask')).toBeTruthy();
  });
  
  it(`simple word 'ASK' toUpperCase`, () => {
    expect(isIsogram('ASK')).toBeTruthy();
  });

  it(`when the word is empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`the word is too big 'qwertyuiopasdfghjklzxcvbnm'`, () => {
    expect(isIsogram('qwertyuiopasdfghjklzxcvbnm')).toBeTruthy();
  });

  it(`the word is just one letter`, () => {
    expect(isIsogram('b')).toBeTruthy();
  });

  it(`with specific letters`, () => {
    expect(isIsogram('іїє')).toBeTruthy();
  });
});

describe(`'isIsogram' function - result === false (NOT Isogram)`, () => {
  const { isIsogram } = require('./isIsogram');

  it(`Simple word 'bob' toLowerCase`, () => {
    expect(isIsogram('bob')).toBeFalsy();
  });

  it(`Simple word 'BOB' toUpperCase`, () => {
    expect(isIsogram('BOB')).toBeFalsy();
  });

  it(`With three same letters`, () => {
    expect(isIsogram('BaBdB')).toBeFalsy();
  });

  it(`when the same letters at the end word`, () => {
    expect(isIsogram('bosss')).toBeFalsy();
  });
  
  it(`when the same letters at the begin word`, () => {
    expect(isIsogram('sssstart')).toBeFalsy();
  });
});


describe(`Tests that found issues in the 'isIsogram' function.`
+ `I am almost sure that it could be my mistake, so I expect from you big notices)))`, () => {
  const { isIsogram } = require('./isIsogram');
  
  it(`the function calculates spaces as letters`, () => {
  expect(isIsogram('   bedi')).toBeTruthy();
});

it(`the function reads string like one big word`, () => {
  expect(isIsogram('ask ask')).toBeTruthy();
});
});